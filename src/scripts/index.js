import '../styles/index.scss';

$(document).ready(function() {

    // Navbar Toogle
    $(".navbar-toggler").click(function() {
        $("body").toggleClass("collapsed");
    });      
});