// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

$(document).ready(function(){
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        affixHeight = $(".nav-pills.nav-stacked").height(),
        $gallery = $(".mainContent").find("main");

    //alert(windowHeight);

    // Adjust Top Margin of Product Section for Menu
    if(windowWidth <= 350) {
        if (affixHeight >= 160) {
            $gallery.css("marginTop", "200px");
        } else if (affixHeight >= 70) {
            $gallery.css("marginTop", "165px");
        } else {
            $gallery.css("marginTop", "100px");
        }
    } else if (windowWidth <= 970) {
        if (affixHeight >= 70) {
            $gallery.css("marginTop", "165px");
        } else {
            $gallery.css("marginTop", "100px");
        }
    } else {
        $gallery.css("marginTop", "30px");
    }

    $(window).on("resize", function() {
        var windowWidth = $(window).width(),
            affixHeight = $(".nav-pills.nav-stacked").height();

        // Adjust Top Margin of Product Section for Menu
        if(windowWidth <= 350) {
            if (affixHeight >= 160) {
                $gallery.css("marginTop", "200px");
            } else if (affixHeight >= 70) {
                $gallery.css("marginTop", "165px");
            } else {
                $gallery.css("marginTop", "100px");
            }
        } else if (windowWidth <= 970) {
            if (affixHeight >= 70) {
                $gallery.css("marginTop", "165px");
            } else {
                $gallery.css("marginTop", "100px");
            }
        } else {
            $gallery.css("marginTop", "30px");
        }
    });

}); // end ready
