export const sizes = {
  mobile: "360px",
  tabletPortrait: "600px",
  tabletLandscape: "900px",
  tabletLandscape1024: "1024px",
  desktop: "1120px",
  desktopBig: "1400px"
};

export default {
  mobile: `(min-width: ${sizes.mobile})`,
  tabletPortrait: `(min-width: ${sizes.tabletPortrait})`,
  tabletLandscape: `(min-width: ${sizes.tabletLandscape})`,
  tabletLandscape1024: `(min-width: ${sizes.tabletLandscape1024})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopBig: `(min-width: ${sizes.desktopBig})`
};
