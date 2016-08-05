var getQueryString=function(field,url){
    var href=url ? url:window.location.href;
    var reg=new RegExp("[?&]"+field+ "=([^&#]*)","i");
    var string=reg.exec(href);
    console.log(string[1]);
    return string ? string[1]:null;
}

var queryData=[getQueryString("type"),getQueryString("name")];
function redirect(){
    window.location.href = "forumThread.html?type="+queryData[0]+"&name="+queryData[1];
}
$(document).ready(function()
{
    var wordCounts = {};
    $("#word_count").keyup(function() {
        var matches = this.value.match(/\b/g);
        
        wordCounts[this.id] = matches ? matches.length / 2 : 0;
        
        var finalCount = 0;
        $.each(wordCounts, function(k, v) {
            finalCount += v;

        });
        $('#display_count').html(finalCount);
        //am_cal(finalCount);
    }).keyup();
 });
