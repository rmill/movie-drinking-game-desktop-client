import { Injectable } from '@angular/core';

@Injectable()
export class AnimateService {

  randomEnter(): string {
    var enterAnimations = [
      'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp',
      'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig',
      'flipInX', 'flipInY',
      'lightSpeedIn',
      'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',
      'rollIn',
      'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
      'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'
    ];

    var index = Math.round(Math.random() * (enterAnimations.length - 1));
    return enterAnimations[index];
  }

  randomExit(): string {
    var exitAnimations = [
      'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp',
      'fadeOut', 'fadeOutDown',  'fadeOutDownBig', 'fadeOutLeft',  'fadeOutLeftBig',  'fadeOutRight', 'fadeOutRightBig',  'fadeOutUp', 'fadeOutUpBig',
      'flipOutX', 'flipOutY',
      'lightSpeedOut',
      'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
      'rollOut',
      'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp',
      'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
    ];

    var index = Math.round(Math.random() * (exitAnimations.length - 1));
    return exitAnimations[index];
  }
}
