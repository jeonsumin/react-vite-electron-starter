import { MutableRefObject } from 'react';

export const commonFunction = {

  startTimer(timer: MutableRefObject<any>, time: number, callBack: () => void){
    timer.current = setTimeout(callBack,time);
  },

  cancelTimer(timer:MutableRefObject<any>){
    if(timer.current) {
      clearTimeout(timer.current);
    }
  },

}