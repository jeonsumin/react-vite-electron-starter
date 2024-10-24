import { ipcRenderer, contextBridge } from 'electron';

contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);

const api = {
  send: (channel: string, data?: any) => {
    ipcRenderer.send(channel, data);
  },
  sendMessage: (message: string) => {
    ipcRenderer.send('message', message);
  },
  Close: () => {
    ipcRenderer.send('window-close');
  },

  on: (channel: string, callback: (data: any) => void) => {
    ipcRenderer.on(channel, (_, data) => callback(data));
  },
};

declare global {
  interface Window {
    Main: typeof api;
    ipcRenderer: typeof ipcRenderer;
  }
}
contextBridge.exposeInMainWorld('Main', api);
