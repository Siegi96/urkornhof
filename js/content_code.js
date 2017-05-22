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
