'use strict';
import React ,{Component} from 'react';
import {
   View,
   Navigator,
   ToastAndroid
} from 'react-native';
export function NaviGoBack(navigator) {
	if (navigator && navigator.getCurrentRoutes().length > 1) {
		navigator.pop();
		return true;
  }
   return false;
}
