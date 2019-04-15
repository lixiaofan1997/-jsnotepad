/*exported $dlgSearch*/
var $dlgSearch = (function(){
  var DOM=''
    +'<div class="notepad-search-dlg">'
    +'  <div class="dialogbox">'
    +'    <div class="titlebar">'
    +'      <p class="title">查找</p>'
    +'      <span class="btn-close">×</span>'
    +'    </div>'
    +'    <div class="content">'
    +'      <label for="">查找内容(N):</label>'
    +'      <input type="text"/ class="txt">'
    +'      <input type="button" class="btn-goto" value="查找下一个"  disabled/>'
    +'      <input type="checkbox" class="checkbox"><span>区分大小写(C)</span>'
    +'      <fieldset>'
    +'      <legend>方向</legend>'
    +'      <input type="radio" name="direction"/>向上(U)'
    +'      <input type="radio" name="direction"/>向下(D)'
    +'      </fieldset>'
    +'      <input type="button" value="取消" class="btn-cancel"/>'
    +'    </div>'
    +'  </div>'
    +'</div>'; 
  var $dlg = $(DOM),
      $btnCancel = $dlg.find('.btn-cancel'),
      $btnClose = $dlg.find('.btn-close');

  function show(){
    $('body').append($dlg);
   
    $dlg.find('.dialogbox').draggable({handle:$dlg.find('.titlebar')});
    $btnClose.click(function(){$dlg.remove();});
    $btnCancel.click(function(){$dlg.remove();});
  }
  return {show:show};

}());
