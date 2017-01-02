$(document).ready(function() {
    scrolling();
});

function scrolling() {
    $("nav a").click(function(e) {
        e.preventDefault();
        var sectionID = "section" + e.currentTarget.id;
        $("html body").animate({
            scrollTop: $("#" + sectionID).offset().top
        }, 2500)
    })

}