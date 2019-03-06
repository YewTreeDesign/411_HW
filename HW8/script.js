//Preload images first
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
var images = Array("image/space-01.jpg",
                   "image/space-02.jpg",
                   "image/space-03.jpg",
                   "image/space-04.jpg");

$([images[0],images[1],images[2],images[3]]).preload();

// Usage:

var currimg = 0;

$(document).ready(function(){

    function loadimg(){

       $('#background').animate({ opacity: 1 }, 500,function(){

            //finished animating, minifade out and fade new back in
            $('#background').animate({ opacity: 0.7 }, 100,function(){

                currimg++;

                if(currimg > images.length-1){

                    currimg=0;

                }

                var newimage = images[currimg];

                //swap out bg src
                $('#background').css("background-image", "url("+newimage+")");

                //animate fully back in
                $('#background').animate({ opacity: 1 }, 400,function(){

                    //set timer for next
                    setTimeout(loadimg,5000);

                });

            });

        });

     }
     setTimeout(loadimg,5000);

});

(function(){
    var words = [
        'Totality',
        'Incredible',
        'Lacuna',
        'Array'
        ], i = 0;
    setInterval(function(){
        $('#changerificwordspanid').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 2000);

})();

var t = 0;

function moveit() {
    t += 0.06;

    var r = 200;
    var xcenter = 856;
    var ycenter = 385;
    var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t)));
    $('#friends').animate({
        top: newTop,
        left: newLeft,
    }, 1, function() {
        moveit();
    });
}

$(document).ready(function() {
    moveit();
});
$(document).mousemove(function(e){
    $("#friend").stop().animate({left:e.pageX, top:e.pageY});
});
