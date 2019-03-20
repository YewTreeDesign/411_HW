//Funny thing, this was sitting in my folder and it didn't get pushed. Thanks Github Desktop Hud.
//Here's the Resource, this would benefit everyone if they are stuck.

console.log("Here's my resources for transitioning objects with in an array, they are pretty beneficial to look at when you are stuck. Because I had that problem.");
console.log("");
console.log("Resource Source Link For The Transitioning Words/Text:");
console.log("Username: Paulpro");
console.log("https://stackoverflow.com/questions/7425231/jquery-find-word-and-change-every-few-seconds/34640724");
console.log("   ");
console.log("___________________________________________________________________________________________________");
console.log("   ");
console.log("Resource For Transitioning Fade Effect With Array of Images:");
console.log("Username: James");
console.log("https://stackoverflow.com/questions/2983957/animate-background-image-change-with-jquery");
console.log("https://jsfiddle.net/srd76/36/");
console.log("Check CSS to modify #background");
console.log("");
console.log("**************************************");
console.log("");
console.log("Have Fun!");


$.fn.preload = function () {
    this.each(function () {
        $('<img/>')[0].src = this;
    });
}
var images = Array("image/space-01.jpg", "image/space-02.jpg", "image/space-03.jpg", "image/space-04.jpg");

$([images[0], images[1], images[2], images[3]])
    .preload();


//Source For Transitoning images: https://stackoverflow.com/questions/2983957/animate-background-image-change-with-jquery + https://jsfiddle.net/srd76/36/
//Username: James

var currimg = 0;

$(document)
    .ready(function () {

        function loadimg() {

            $('#background')
                .animate({
                    opacity: 1
                }, 500, function () {


                    $('#background')
                        .animate({
                            opacity: 0.7
                        }, 100, function () {

                            currimg++;

                            if (currimg > images.length - 1) {

                                currimg = 0;

                            }

                            var newimage = images[currimg];

                            //swap out bg src
                            $('#background')
                                .css("background-image", "url(" + newimage + ")");

                            //animate fully back in
                            $('#background')
                                .animate({
                                    opacity: 1
                                }, 400, function () {

                                    //set timer for next
                                    setTimeout(loadimg, 5000);

                                });

                        });

                });
                //Source For Transitoning images: https://stackoverflow.com/questions/2983957/animate-background-image-change-with-jquery + https://jsfiddle.net/srd76/36/
                //Username: James
        }
        setTimeout(loadimg, 5000);

    });
// rosource Source Link:
//https://stackoverflow.com/questions/7425231/jquery-find-word-and-change-every-few-seconds/34640724
//Username: Paulpro
(function () {
    var words = [
        'Totality'


            , 'Incredible'


            , 'Lacuna'


            , 'Array'
        ],
        i = 0;
    setInterval(function () {
        $('#changerificwordspanid')
            .fadeOut(function () {
                $(this)
                    .html(words[i = (i + 1) % words.length])
                    .fadeIn();
            });
    }, 2000);
    // rosource Source Link:
    //https://stackoverflow.com/questions/7425231/jquery-find-word-and-change-every-few-seconds/34640724
    //Username: Paulpro
})();

var t = 0;

function moveit() {
    t += 0.06;

    var r = 200;
    var xcenter = 856;
    var ycenter = 385;
    var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t)));
    $('#friends')
        .animate({
            top: newTop,
            left: newLeft,
        }, 1, function () {
            moveit();
        });
}

$(document)
    .ready(function () {
        moveit();
    });
$(document)
    .mousemove(function (e) {
        $("#friend")
            .stop()
            .animate({
                left: e.pageX,
                top: e.pageY
            });
    });
