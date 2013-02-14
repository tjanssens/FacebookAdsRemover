
function HideAds(hide) {
    //alert('ok');
    //alert($('.genericStreamStory').length);
    //$('.genericStreamStory ').hide();
    var items = $('.genericStreamStory')
   // alert($(items[0]).attr("data-ft").length)
    var j = 0;
    for (var i = 0; i < items.length - 1; i++) {
        if (hide) {
            $(".ego_column").hide();
            if ($(items[i]).attr("data-ft") != undefined && $(items[i]).attr("data-ft").length > 100) {
                $(items[i]).hide();
                j++;
            }
        } else {
            $(".ego_column").show()
            $(items[i]).show();

        }
    }
    if (j == undefined)
        return 0;
    return j;
}