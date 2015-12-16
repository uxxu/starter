var libs = {
  bootstrap: 'http://cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js',
  echart: 'http://echarts.baidu.com/build/dist/echarts.js'
}

function addjs( src, location){
  var scriptHtml = '<script src=\"' + src + '\"><\/script>'
  var pos = location !== undefined ? location : $('script[src]').length
  $('script[src]').eq(pos-1).after(scriptHtml)
}

function addcss( href, location){
  var cssHtlm = '<link rel="stylesheet" href="' + href + '">'
  var pos = location !== undefined ? location : $('link[rel]').length
  $('link[rel]').eq(pos-1).after(cssHtlm)
}
