function resetShow() {
    $(document).ready(function() {
        $(".demo").colorbox({rel:"demo", slideshow:true});
    });
}

var main = function () {
    var toDos = ["Get groceries",
                 "Make up some new ToDos",
                 "Prep for Monday's class",
                 "Answer emails",
                 "Take Gracie to the park",
                 "Finish writing this book"];

    var pictures = ["ss_1.png", 
                    "ss_2.png",
                    "ss_3.png",
                    "ss_4.png"];
    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                // newest first, so we have to go through
                // the array backwards
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                // oldest first, so we go through the array forwards
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                // input a new to-do
                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });

                $content = $("<div>").append($input).append($button);
               /* Alternatively append() allows multiple arguments so the above
                can be done with $content = $("<div>").append($input, $button); */
            } else if ($element.parent().is(":nth-child(4)")) {
                // demonstrates the slideshow function of Colorbox
                $(".content").append($("<a class='show' href='ss_1.png' title='Here is your initial To-Do list, listed newest first.'><img src='ss_1.png' width='333' height='239'></a>"));
                $(".content").append($("<a class='show' href='ss_2.png' title='You can add new items to the list via the Add tab.'><img src='ss_2.png' width='333' height='239'></a>"));
                $(".content").append($("<a class='show' href='ss_3.png' title='Newly added items are inserted at the top.'><img src='ss_3.png' width='333' height='239'></a>"));
                $(".content").append($("<a class='show' href='ss_4.png' title='When viewing the Oldest tab, newer items appear at the bottom.'><img src='ss_4.png' width='333' height='239'></a>"));
                //Fire the slideshow when the Demonstration Tab is clicked.
                $(".show").colorbox({
                    rel: ".show",
                    width: "65%", 
                    slideshow: true,
                    slideshowSpeed: 5000
                });
            }

            $("main .content").append($content);

            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);


