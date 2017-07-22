// This load all svg to a common sprite and create a component
// called Symbol. Then it turns linkable by name:
//
// <svg viewBox={viewBox} height={height} width={width}>
//    <use xlinkHref={`#name`} />;
// </svg>
//
// Avoids raise error when testing
// https://github.com/facebook/jest/issues/2298
try {
  const requireall = (file) => { file.keys().forEach(file); };
  const files = require.context('.', true, /\.svg$/);
  requireall(files);
} catch (e) {
  if (!(e instanceof TypeError)) {
    throw e;
  }
}
