function ExportToExcel(e){
    var sHTML=
    '<html xmlns:rdl>\n<head>\n<meta http-equiv="Content-Type" content="text\/html; charset=gb2312">\n<title>ToExcel　　　　　' +
    '<\/title>\n<style>\n'+
    'body{margin:0px;padding:16px;background:#FFFFFF;overflow:auto;}\n'+
    'body,table,input,select,textarea,a{font-family:verdana,tahoma,arial;font-size:11px;color:#000000;word-break:break-all;}\n'+
    'table,img{border:0px;}\n'+
    'a{text-decoration:none;color:#003399;}\n'+
    'a:hover{color:#000000;text-decoration:underline;}\n'+
    '#id_div3{padding-top:8px;border-top:1px solid #000000;line-height:15px;}\n'+
    '#id_span3{font-size:10px;font-family:tahoma;}\n'+
    '\n<\/style>\n'+
    '\n<\/head>\n<body>\n正在导出到表单...'+
    '\n<br>&nbsp;<br>&nbsp;<br>\n<div id=id_div3>导出完毕后，窗口会自动关闭，如未出现请注意表单是否被拦截工具拦截了'+
    '<br><span id=id_span3>'+
    '<\/span><\/div>\n<\/body>\n<\/html>';

    var iWinWidth = 200
    var iWinHeight = 130
    
    var ExportWin=window.open('','ExportToExcel','resizable=1');
    ExportWin.resizeTo(iWinWidth,iWinHeight);
    ExportWin.moveTo(Math.ceil((window.screen.availWidth-iWinWidth)/2),Math.ceil((window.screen.availHeight-iWinHeight)/2));
    ExportWin.document.open('text/html','replace');
    //ExportWin.document.clear();
    ExportWin.document.write(sHTML);
    //ExportWin.document.createStyleSheet('rdl_method.css');
    //ExportWin.document.close();
    ExportWin.location.reload();
    ExportWin.focus();
}

function CloseExportWin(){
    var ExportWin=window.open('','ExportToExcel','resizable=1,height=5,width=5,top=0,left=0');
    ExportWin.close();
}