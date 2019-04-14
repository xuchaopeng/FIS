//加md5
fis.match('*.{js,css,png}', {
  useHash: true
});
//啟用fis-spriter-csssprites插件 對node版本有要求6.8.1可行
fis.match('::packager', {
  spriter: fis.plugin('csssprites'),
  postpackager: fis.plugin('loader')
});

fis.match('**.css', {
  //給匹配的文件分配屬性 useSprite
  useSprite: true,
  //匹配文件壓縮
  optimizer: 'clean-css',
  //匹配文件打包 到app.css
  packTo: 'dist/css/app.css',
  //发布
  release: 'dist/$0'
});

fis.match('**.js', {
  //匹配文件壓縮
  optimizer: 'uglify-js',
  //匹配文件打包 到app.js
  packTo: 'dist/js/app.js'
});

fis.match('**.png', {
  release: false
});

fis.match('**.html', {
  release: 'dist/$0'
});