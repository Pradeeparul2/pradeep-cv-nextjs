export const animationAllClasses: Record<
  number,
  { inClass: string; outClass: string }
> = {
  1: {
    inClass: "animated-section-moveFromRight",
    outClass: "animated-section-moveToLeft",
  },
  2: {
    inClass: "animated-section-moveFromLeft",
    outClass: "animated-section-moveToRight",
  },
  3: {
    inClass: "animated-section-moveFromBottom",
    outClass: "animated-section-moveToTop",
  },
  4: {
    inClass: "animated-section-moveFromTop",
    outClass: "animated-section-moveToBottom",
  },
  5: {
    inClass: "animated-section-moveFromRight animated-section-ontop",
    outClass: "animated-section-fade",
  },
  6: {
    inClass: "animated-section-moveFromLeft animated-section-ontop",
    outClass: "animated-section-fade",
  },
  7: {
    inClass: "animated-section-moveFromBottom animated-section-ontop",
    outClass: "animated-section-fade",
  },
  8: {
    inClass: "animated-section-moveFromTop animated-section-ontop",
    outClass: "animated-section-fade",
  },
  9: {
    inClass: "animated-section-moveFromRightFade",
    outClass: "animated-section-moveToLeftFade",
  },
  10: {
    inClass: "animated-section-moveFromLeftFade",
    outClass: "animated-section-moveToRightFade",
  },
  11: {
    inClass: "animated-section-moveFromBottomFade",
    outClass: "animated-section-moveToTopFade",
  },
  12: {
    inClass: "animated-section-moveFromTopFade",
    outClass: "animated-section-moveToBottomFade",
  },
  13: {
    inClass: "animated-section-moveFromRight",
    outClass: "animated-section-moveToLeftEasing animated-section-ontop",
  },
  14: {
    inClass: "animated-section-moveFromLeft",
    outClass: "animated-section-moveToRightEasing animated-section-ontop",
  },
  15: {
    inClass: "animated-section-moveFromBottom",
    outClass: "animated-section-moveToTopEasing animated-section-ontop",
  },
  16: {
    inClass: "animated-section-moveFromTop",
    outClass: "animated-section-moveToBottomEasing animated-section-ontop",
  },
  17: {
    inClass: "animated-section-moveFromRight animated-section-ontop",
    outClass: "animated-section-scaleDown",
  },
  18: {
    inClass: "animated-section-moveFromLeft animated-section-ontop",
    outClass: "animated-section-scaleDown",
  },
  19: {
    inClass: "animated-section-moveFromBottom animated-section-ontop",
    outClass: "animated-section-scaleDown",
  },
  20: {
    inClass: "animated-section-moveFromTop animated-section-ontop",
    outClass: "animated-section-scaleDown",
  },
  21: {
    inClass: "animated-section-scaleUpDown animated-section-delay300",
    outClass: "animated-section-scaleDown",
  },
  22: {
    inClass: "animated-section-scaleUp animated-section-delay300",
    outClass: "animated-section-scaleDownUp",
  },
  23: {
    inClass: "animated-section-scaleUp",
    outClass: "animated-section-moveToLeft animated-section-ontop",
  },
  24: {
    inClass: "animated-section-scaleUp",
    outClass: "animated-section-moveToRight animated-section-ontop",
  },
  25: {
    inClass: "animated-section-scaleUp",
    outClass: "animated-section-moveToTop animated-section-ontop",
  },
  26: {
    inClass: "animated-section-scaleUp",
    outClass: "animated-section-moveToBottom animated-section-ontop",
  },
  27: {
    inClass: "animated-section-scaleUpCenter animated-section-delay400",
    outClass: "animated-section-scaleDownCenter",
  },
  28: {
    inClass:
      "animated-section-moveFromRight animated-section-delay200 animated-section-ontop",
    outClass: "animated-section-rotateRightSideFirst",
  },
  29: {
    inClass:
      "animated-section-moveFromLeft animated-section-delay200 animated-section-ontop",
    outClass: "animated-section-rotateLeftSideFirst",
  },
  30: {
    inClass:
      "animated-section-moveFromTop animated-section-delay200 animated-section-ontop",
    outClass: "animated-section-rotateTopSideFirst",
  },
  31: {
    inClass:
      "animated-section-moveFromBottom animated-section-delay200 animated-section-ontop",
    outClass: "animated-section-rotateBottomSideFirst",
  },
  32: {
    inClass: "animated-section-flipInLeft animated-section-delay500",
    outClass: "animated-section-flipOutRight",
  },
  33: {
    inClass: "animated-section-flipInRight animated-section-delay500",
    outClass: "animated-section-flipOutLeft",
  },
  34: {
    inClass: "animated-section-flipInBottom animated-section-delay500",
    outClass: "animated-section-flipOutTop",
  },
  35: {
    inClass: "animated-section-flipInTop animated-section-delay500",
    outClass: "animated-section-flipOutBottom",
  },
  36: {
    inClass: "animated-section-scaleUp",
    outClass: "animated-section-rotateFall animated-section-ontop",
  },
  37: {
    inClass: "animated-section-rotateInNewspaper animated-section-delay500",
    outClass: "animated-section-rotateOutNewspaper",
  },
  38: {
    inClass: "animated-section-moveFromRight",
    outClass: "animated-section-rotatePushLeft",
  },
  39: {
    inClass: "animated-section-moveFromLeft",
    outClass: "animated-section-rotatePushRight",
  },
  40: {
    inClass: "animated-section-moveFromBottom",
    outClass: "animated-section-rotatePushTop",
  },
  41: {
    inClass: "animated-section-moveFromTop",
    outClass: "animated-section-rotatePushBottom",
  },
  42: {
    inClass: "animated-section-rotatePullRight animated-section-delay180",
    outClass: "animated-section-rotatePushLeft",
  },
  43: {
    inClass: "animated-section-rotatePullLeft animated-section-delay180",
    outClass: "animated-section-rotatePushRight",
  },
  44: {
    inClass: "animated-section-rotatePullBottom animated-section-delay180",
    outClass: "animated-section-rotatePushTop",
  },
  45: {
    inClass: "animated-section-rotatePullTop animated-section-delay180",
    outClass: "animated-section-rotatePushBottom",
  },
  46: {
    inClass: "animated-section-moveFromRightFade",
    outClass: "animated-section-rotateFoldLeft",
  },
  47: {
    inClass: "animated-section-moveFromLeftFade",
    outClass: "animated-section-rotateFoldRight",
  },
  48: {
    inClass: "animated-section-moveFromBottomFade",
    outClass: "animated-section-rotateFoldTop",
  },
  49: {
    inClass: "animated-section-moveFromTopFade",
    outClass: "animated-section-rotateFoldBottom",
  },
  50: {
    inClass: "animated-section-rotateUnfoldLeft",
    outClass: "animated-section-moveToRightFade",
  },
  51: {
    inClass: "animated-section-rotateUnfoldRight",
    outClass: "animated-section-moveToLeftFade",
  },
  52: {
    inClass: "animated-section-rotateUnfoldTop",
    outClass: "animated-section-moveToBottomFade",
  },
  53: {
    inClass: "animated-section-rotateUnfoldBottom",
    outClass: "animated-section-moveToTopFade",
  },
  54: {
    inClass: "animated-section-rotateRoomLeftIn",
    outClass: "animated-section-rotateRoomLeftOut animated-section-ontop",
  },
  55: {
    inClass: "animated-section-rotateRoomRightIn",
    outClass: "animated-section-rotateRoomRightOut animated-section-ontop",
  },
  56: {
    inClass: "animated-section-rotateRoomTopIn",
    outClass: "animated-section-rotateRoomTopOut animated-section-ontop",
  },
  57: {
    inClass: "animated-section-rotateRoomBottomIn",
    outClass: "animated-section-rotateRoomBottomOut animated-section-ontop",
  },
  58: {
    inClass: "animated-section-rotateCubeLeftIn",
    outClass: "animated-section-rotateCubeLeftOut animated-section-ontop",
  },
  59: {
    inClass: "animated-section-rotateCubeRightIn",
    outClass: "animated-section-rotateCubeRightOut animated-section-ontop",
  },
  60: {
    inClass: "animated-section-rotateCubeTopIn",
    outClass: "animated-section-rotateCubeTopOut animated-section-ontop",
  },
  61: {
    inClass: "animated-section-rotateCubeBottomIn",
    outClass: "animated-section-rotateCubeBottomOut animated-section-ontop",
  },
  62: {
    inClass: "animated-section-rotateCarouselLeftIn",
    outClass: "animated-section-rotateCarouselLeftOut animated-section-ontop",
  },
  63: {
    inClass: "animated-section-rotateCarouselRightIn",
    outClass: "animated-section-rotateCarouselRightOut animated-section-ontop",
  },
  64: {
    inClass: "animated-section-rotateCarouselTopIn",
    outClass: "animated-section-rotateCarouselTopOut animated-section-ontop",
  },
  65: {
    inClass: "animated-section-rotateCarouselBottomIn",
    outClass: "animated-section-rotateCarouselBottomOut animated-section-ontop",
  },
  66: {
    inClass: "animated-section-rotateSidesIn animated-section-delay200",
    outClass: "animated-section-rotateSidesOut",
  },
  67: {
    inClass: "animated-section-rotateSlideIn",
    outClass: "animated-section-rotateSlideOut",
  },
};
