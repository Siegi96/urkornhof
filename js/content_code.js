/**
 * Created by Siegi on 22.05.2017.
 */
/*
var SearchBarShowed = false;
var searchTriangle = $("#searchTriangle");
var searchBarDesktop = $("#searchBarDesktop");

searchTriangle.on( "click", showSearchBar );
function showSearchBar() {
    if(!SearchBarShowed){
        searchBarDesktop.css("opacity", "1");
        searchBarDesktop.css("margin-bottom", "65");
        searchTriangle.toggleClass("fa-search-plus fa-search-minus");


        SearchBarShowed=true;
    }
    else{
        searchBarDesktop.css("opacity", "0");
        searchBarDesktop.css("margin-bottom", "0");
        searchTriangle.toggleClass("fa-search-minus fa-search-plus");
        SearchBarShowed=false;
    }
}*/


var SearchBarShowedMobile = false;
var mobilFilterButton = $("#mobileFilterButton");
var mobilefilter = $("#mobilefilter");

mobilFilterButton.on( "click", showMobileSearchBar );
function showMobileSearchBar() {
    if(!SearchBarShowedMobile){
        mobilefilter.css("opacity", "1");
        mobilefilter.css("margin-bottom", "0px");
        $("#filterArrow").toggleClass("fa-arrow-down fa-arrow-up");


        SearchBarShowedMobile=true;
    }
    else{
        mobilefilter.css("opacity", "0");
        mobilefilter.css("margin-bottom", "-120px");
        $("#filterArrow").toggleClass("fa-arrow-up fa-arrow-down");
        SearchBarShowedMobile=false;
    }
}


$(".arrow").click(function(){
    console.log("asdf");
    $(".desktopPics .col-md-2").fadeTo(400, 0);
    $(".desktopPics .col-md-2").fadeTo(400, 1);
    /*$(".desktopPics .col-md-2").css("transition", "0.5s");
    $(".desktopPics .col-md-2").css("opacity", "0.1");
    $(".desktopPics .col-md-2").css("opacity", "1");*/


});

