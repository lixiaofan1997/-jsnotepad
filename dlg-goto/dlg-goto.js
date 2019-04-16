/*exported $dlgGoto*/
var $dlgGoto = (function(){
  var DOM=''
    +'<div class="notepad-goto-dlg">'
    +'  <div class="dialogbox">'
    +'    <div class="titlebar">'
    +'      <p class="title">转到指定行</p>'
    +'      <span class="btn-close">×</span>'
    +'    </div>'
    +'    <div class="content">'
    +'      <label for="">行号(L):</label>'
    +'      <input type="text" class="line-num" autofocus/>'
    +'      <input type="button" class="btn-goto" value="转到" />'
    +'      <input type="button" class="btn-cancel" value="取消" />'
    +'    </div>'
    +'  </div>'
    +'</div>';
  
  var $dlg = $(DOM),
      $btnCancel = $dlg.find('.btn-cancel'),
      $btnClose = $dlg.find('.btn-close'),
      $btnGoto = $dlg.find('.btn-goto'),
      $txtLineNum = $dlg.find('.line-num'),
      $titlebar = $dlg.find('.titlebar');
  var cfg={
    curLine:3,
    totalLines:1,
    gotoHandler:null
  }
  function destroy(){$dlg.remove();}

  function validation(){
    var num=Number($txtLineNum.val());
    if(num === 0 || num>cfg.totalLines){
      alert('行数超过了总行数');
      return false;
    }
    return true;
  }
  function gotoHandler(){
    if(!validation()) return;

    cfg.gotoHandler($txtLineNum.val());
    destroy();
  }
  function filterKey(e){
    if(!/[0-9]/.test(e.key)){
      e.preventDefault();
      alert('不能输入除数字以外的非法字符');
    }
  }
  var init=function(conf){
    $.extend(cfg,conf);
    $('body').append($dlg);
    
    $dlg.find('.dialogbox').draggable({handle:$titlebar});
    $txtLineNum.val(cfg.curLine);
    $btnClose.click(destroy);
    $btnCancel.click(destroy);
    $btnGoto.click(gotoHandler);
    $txtLineNum.keypress(filterKey);
    $txtLineNum.select();
  };
  return {init:init};

}());
