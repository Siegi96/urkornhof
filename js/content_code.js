/**
 * Created by Siegi on 22.05.2017.
 */

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
}


var SearchBarShowedMobile = false;
var mobilFilterButton = $("#mobileFilterButton");
var mobilefilter = $("#mobilefilter");

mobilFilterButton.on( "click", showMobileSearchBar );
function showMobileSearchBar() {
    if(!SearchBarShowedMobile){
        mobilefilter.css("display", "inherit");
        mobilefilter.css("margin-bottom", "65");
        $("#filterArrow").toggleClass("fa-arrow-down fa-arrow-up");


        SearchBarShowedMobile=true;
    }
    else{
        mobilefilter.css("display", "none");
        mobilefilter.css("margin-bottom", "0");
        $("#filterArrow").toggleClass("fa-arrow-up fa-arrow-down");
        SearchBarShowedMobile=false;
    }
}

