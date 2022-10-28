$ = jQuery;

// Gallery layout
$(window).bind("load", function() {
    const item = $(".md-portfolio-grid-image .et_pb_gallery_item");
    setTimeout(function() {
        item.removeClass("first_in_row last_in_row on_last_row");
        // item.first()
        //     .find("img")
        //     .attr("src", "second.jpg");
    }, 500);
});
$(window).on("resize", function(e) {
    e.preventDefault();
    const item = $(".md-portfolio-grid-image .et_pb_gallery_item");
    setTimeout(() => {
        if ($(item).hasClass("first_in_row")) {
            item.removeClass("first_in_row");
        }
        if ($(item).hasClass("last_in_row")) {
            item.removeClass("last_in_row");
        }
    }, 300);
});
