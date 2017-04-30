/**
 * Created by Marlene on 28.04.17.
 */
/******Menü************/
var open = false;
var search = false;

function Menu(){
    if(open){
        console.log("-opening the menu");

        $(".downMenu").removeClass("open");
        $(".content").removeClass("remove");
        $(".footer").removeClass("remove");
        $(".menu").removeClass("test");

        open=false;
    }
    else{
        $(".downMenu").addClass("open");
        $(".content").addClass("remove");
        $(".footer").addClass("remove");
        $(".second_menu").css("display", "none");
        $(".show_second_menu").text("+");
        open = true;
    }
}

$('.menu').click(Menu);

$('#nav-icon1').click(function(){
    $(this).toggleClass('open');
});

/***********Untermenü************/
$('.show_second_menu').click(function(){
    if($(this).html() == "+"){
        if($(this).attr("id") == "show_About") {
            $(".second_menu_About").css("display", "inherit");
        }

        if($(this).attr("id") == "show_Tipps") {
            $(".second_menu_Tipps").css("display", "inherit");
        }

        if($(this).attr("id") == "show_News") {
            $(".second_menu_News").css("display", "inherit");
        }
        $(this).text("-");
    }
    else{

        if($(this).attr("id") == "show_About") {
            $(".second_menu_About").css("display", "none");
        }
        if($(this).attr("id") == "show_Tipps") {
            $(".second_menu_Tipps").css("display", "none");
        }
        if($(this).attr("id") == "show_News") {
            $(".second_menu_News").css("display", "none");
        }
        $(this).text("+");
    }
});

$(".second_menu div:last-child").css("border-bottom", "none");

/***********search**************/
function Search_bar(){
    if (search){
        $(".searchBar").css("display", "none");
        search = false;
    }
    else{
        $(".searchBar").css("display", "flex");
        search = true;
    }
}

function removeSearch(){
    $(".searchBar").css("display", "none");
    search = false;
}

$('.search').click(Search_bar);

$('.fa-times-circle').click(removeSearch);

