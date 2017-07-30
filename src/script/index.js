
var clipboard = new Clipboard('#js-button-copy');

$(function() {

  //記事とurlのコピー
  $('#js-button-copy').on('click', function(){
    $(this).addClass('is-copied');
    $(this).html('<p class="button-copy-text"><span class="button-copy-icon"><i class="fa fa-file-text-o" aria-hidden="true"></i></span><span>コピーしました</span></p>');
  });

  //目次の生成
  var idcount = 1;
  var toc = '';
  var currentlevel = 0;
  $(".article h2, .article h3, .article h4", this).each(function(){
      this.id = "toc_" + idcount;
      idcount++;
      var level = 0;
      if(this.nodeName.toLowerCase() == "h2") {
          level = 1;
      } else if(this.nodeName.toLowerCase() == "h3") {
          level = 2;
      } else if(this.nodeName.toLowerCase() == "h4") {
          level = 3;
      } else if(this.nodeName.toLowerCase() == "h5") {
          level = 4;
      }
      while(currentlevel < level) {
          toc += "<ol class='toc-list'>";
          currentlevel++;
      }
      while(currentlevel > level) {
          toc += "</ol>";
          currentlevel--;
      }
      toc += '<li><a href="#' + this.id + '">' + $(this).html() + "<\/a><\/li>\n";
  });
  if(toc){ toc = '<div class="toc"><div class="toc-title"><i class="fa fa-list" aria-hidden="true"></i>この記事の目次</div>' + toc + '</div>'; }
  $("#js-toc").html(toc);

  //ページ内リンク#非表示。加速スクロール
  $('a[href^=#]').on('click', function(){
    var  speed = 600,
    href= $(this).attr("href"),
    target = $(href == "#" || href == "" ? 'html' : href),
    position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

});
