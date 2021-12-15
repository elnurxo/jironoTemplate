$(function(){
    // Loader
    $(window).on("load",function(){
        setTimeout(removeLoader,1000);
        $('#loadingwrapper').css({"display":"block","visibility":"visible","opacity":"1"});
    })
    function removeLoader(){
        $('#loadingwrapper').fadeOut(500,function(){
            $("#loadingwrapper").remove();
        })
    }

    $('#hamburgerclick').click(function(){      
        if ($("#midline").width() == "30") {
            $("#topline").css({"transform": "rotate(45deg)", "width": "31px","transition":".3s linear"});
            $("#midline").css({"opacity": "0", "width": "0px","transition":".3s linear"});
            $("#bottomline").css({"transform": "rotate(-45deg)", "width": "31px","transition":".3s linear"}); 
            addNavbarAccordion();        
        }
        else{
            $("#topline").css({"transform": "rotate(0)", "width": "21px"});
            $("#midline").css({"opacity": "1", "width": "30px"});
            $("#bottomline").css({"transform": "rotate(0)", "width": "21px"});
            removeNavbarAccordion();
        }
    });

    function addNavbarAccordion(){
        $(".dropdownnav").css({"height":"200px","transition":".3s linear"})
    }

    function removeNavbarAccordion(){
        $(".dropdownnav").css({"height":"0px","transition":".3s linear"})
    }
    $(document).scroll(function(){
        if ($(window).width()>992) {
            if (window.scrollY<60) {
                $(".myNavbar").css({"height":"77px","background-color":"transparent", "box-shadow":"0","transition":".3s"}); 
                $(".logo").css({"height":"100px","transition":".3s"});
                $(".links").css({"line-height":"100px","transition":".3s"});
                $(".buttons").css({"line-height":"100px","transition":".3s"}); 
                $(".myNavbar").css("box-shadow","none");
            }
            else{
                $(".myNavbar").css("box-shadow","rgba(100, 100, 111, 0.2) 0px 7px 29px 0px");
                $(".myNavbar").css({"height":"77px","background-color":"#fff"," box-shadow":"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px","transition":".3s"}); 
                $(".logo").css({"height":"77px","transition":".3s"});
                $(".links").css({"line-height":"77px","transition":".3s"});
                $(".buttons").css({"line-height":"77px","transition":".3s"});
            }       
        }
    });
});