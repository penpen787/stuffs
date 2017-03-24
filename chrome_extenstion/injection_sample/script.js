$(document).ready(function() {   // Load the function after DOM ready.

    var link1=chrome.extension.getURL("s_icon.png");     //Get absolute path of the file residing your extension.
    var t1='<div id="pop"><a href=""><img id="mgt" src="'+link1+'"width="25" height="24"></a></div>'    //now set the src to absolute path.
    $("#eow-title").prepend(t1);     //Insert MailGet icon into top-right corner of Gmail home.
});