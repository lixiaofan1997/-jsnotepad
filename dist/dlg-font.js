var $dlgFont=function(){var i=$('<div class="notepad-font-dlg"><div class="dialogbox"><div class="titlebar"><p class="title">字体</p><span class="btn-close">×</span></div><div class="content"><div class="box"><div class="box1"><label>字体(F):</label><div class="family"><select id="font" name="" class="box1"><option>隶书</option><option value="">楷体</option><option value="">宋体</option><option value="">微软雅黑</option><option value="">幼圆</option><option value="">华文中宋</option></select></div></div><div class="box2"><label>字形(Y):</label><input type="text" value="常规"/><div class="style"></div></div><div class="box3"><label>大小(S):</label><input type="text" value="小四"/><div class="size"></div></div></div><fieldset><legend>示例</legend><h4>AaBbYyZz</h4></fieldset><div class="foot"><label>脚本(R):</label><select><option>西欧语言</option><option>中文GB2312</option></select><input type="button" value="确定" class="btn-confirm"/><input type="button" value="取消" class="btn-cancel"/></div></div></div>'),l=i.find(".btn-confirm"),o=i.find(".btn-cancel"),t=i.find(".btn-close");return{show:function(){$("body").append(i),i.find(".dialogbox").draggable({handle:i.find(".titlebar")}),o.click(function(){i.remove()}),l.click(function(){i.remove()}),t.click(function(){i.remove()})}}}();