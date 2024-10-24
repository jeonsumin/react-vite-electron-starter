import { ConfigEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigpaths from 'vite-tsconfig-paths';
import { join } from 'path';
import electron from 'vite-plugin-electron';
import renderer from 'vite-plugin-electron-renderer';
import pkg from './package.json';
import { rmSync } from 'node:fs';
import withReactRouter  from 'vite-plugin-next-react-router';

// https://vitejs.dev/config/
const root = join(__dirname);
const srcRoot = join(__dirname, 'src');
const pathAlias = {
  alias: {
    '/@': srcRoot,
    components: join(__dirname, 'src/components'),
    store: join(__dirname, 'src/store'),
    assets: join(__dirname, 'src/assets'),
    views: join(__dirname, 'src/views'),
    data: join(__dirname, 'src/data'),
    common: join(__dirname, 'src/common'),
    router: join(__dirname, 'src/router'),
  },
};
rmSync('dist-electron', { recursive: true, force: true });
const buildElectron = (isDev: boolean) => ({
  sourcemap: isDev,
  minify: !isDev,
  outDir: join(root, 'dist-electron'),
  rollupOptions: {
    external: Object.keys(pkg.dependencies || {}),
  },
});

function plugins(isDev: boolean) {
  return [
    react(),
    tsconfigpaths(),
    renderer(),
    electron([
      {
        entry: join(root, 'electron/index.ts'),
        onstart(options) {
          options.startup();
        },
        vite: {
          build: buildElectron(isDev),
        },
      },
      {
        entry: join(root, 'electron/preload.ts'),
        onstart(options) {
          options.reload();
        },
        vite: {
          build: buildElectron(isDev),
        },
      },
    ]),
  ];
}

export default ({ command }: ConfigEnv): UserConfig => {
  // if (command === 'serve') {
  //   return {
  //     plugins: [react(), tsconfigpaths()],
  //     server: {
  //       port: 3000,
  //     },
  //     build: {
  //       minify: 'terser',
  //       terserOptions: {
  //         compress: {
  //           drop_console: true,
  //           drop_debugger: true,
  //         },
  //       },
  //     },
  //   };
  // }

  if (command === 'serve') {
    return {
      root: srcRoot,
      base: '/',
      plugins: plugins(true),
      resolve: pathAlias,
      build: {
        outDir: join(root, '/dist-vite'),
        emptyOutDir: true,
        rollupOptions: {},
      },
      server: {
        port: process.env.PORT === undefined ? 3000 : +process.env.PORT,
      },
      optimizeDeps: {
        exclude: ['path'],
      },
    };
  }

  //PROD
  return {
    root: srcRoot,
    base: './',
    plugins: plugins(false),
    resolve: pathAlias,
    build: {
      outDir: join(root, '/dist-vite'),
      emptyOutDir: true,
      rollupOptions: {},
    },
    server: {
      port: process.env.PORT === undefined ? 3000 : + process.env.PORT,
    },
    optimizeDeps: {
      exclude: ['path'],
    },
  };
};
