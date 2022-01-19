package com.immovablesapp_frontend;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // splash screen 위한 import
import android.os.Bundle; // Splash 화면 android os 

public class MainActivity extends ReactActivity {

  /*
   * Splash Screen 을 위한 함수 생성
  */
  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ImmovablesApp_Frontend";
  }
}
