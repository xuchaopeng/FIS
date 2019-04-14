//第一步 定义规范
fis.hook('commonjs');
//第二部 获取需要处理的js文件
fis.match('js/**.js', {
  useHash: true,
  optimizer: 'uglify-js'
});
fis.match('js/{lib,modules}/**.js', {
  //模块化(mod.js不能模块化)
  isMod: true,
  packTo: 'js/app.js'
});

//引入打包插件
fis.match('::package', {
  postpackager: 'loader'
});
