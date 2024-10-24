'use strict';
import axios, { AxiosHeaders } from 'axios';
import moment from 'moment';
import Cookies = Electron.Cookies;

const domain = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const UTILS = {
  isNullCheckArray(obj: any) {
    if (obj === undefined || obj === '' || obj === null) return 0;

    return 1;
  },

  isNull(obj: any) {
    if (
      obj === undefined ||
      obj === '' ||
      obj === null ||
      obj === 'null' ||
      obj === 'undefined'
    ) {
      return true;
    }
    return false;
  },

  isHangul(ch: any) {
    const check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (check.test(ch)) return true;
    return false;
  },

  checkLength(obj: any, maxLen: number) {
    if (obj !== undefined) {
      if (obj.length === maxLen) {
        return true;
      }
    }
    return false;
  },

  checkEmail(obj: any) {
    const re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(obj);
  },

  checkHp(obj: any) {
    if (this.checkLengthBetween(obj, 10, 11)) {
      console.log(obj);
      //var regHp = /(^[+][0-9]{2})([0-9]{2})([0-9]+)([0-9]{4})$/;
      const regHp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
      return regHp.test(obj);
    } else {
      return false;
    }
  },

  checkLengthUnder(obj: any, maxLen: number) {
    if (obj !== undefined) {
      if (obj.length <= maxLen) {
        return true;
      }
    }
    return false;
  },

  checkPassword(obj: any) {
    const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/gm;
    return regExp.test(obj);
  },

  checkLengthBetween(obj: any, minLen: number, maxLen: number) {
    if (obj !== undefined) {
      if (obj.length >= minLen && obj.length <= maxLen) {
        return true;
      }
    }
    return false;
  },

  async asyncNetworkingDo(targetURL: string, parameter: any, callBack: any) {
    try {
      await axios
        .post(`${domain}/${targetURL}`, JSON.stringify(parameter))
        .then((response) => {
          callBack(response.data);
        });
    } catch (error) {
      console.log('Async Network Error : ', error);
    }
  },

  async asyncNetworkingWIthFileDo(
    targetURL: string,
    parameter: any,
    callBack: any
  ) {
    try {
      await axios
        .post(`${domain}/${targetURL}`, parameter, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          transformRequest: (data: any, headers: AxiosHeaders) => {
            return data;
          },
        })
        .then((response) => {
          callBack(response.data);
        });
    } catch (e) {
      console.log('Async Network With File Error :: ', e);
    }
  },

  getValue(obj: any) {
    if (obj === undefined || obj === null) return '';

    return String(obj).trim();
  },
  formatData(obj: any, format: string) {
    let formatter = this.getValue(format);
    if( this.isNull(obj)) return "";

    if(formatter === "") formatter = 'YYYY-MM-DD';

    return moment(obj).format(formatter);
  },
};
