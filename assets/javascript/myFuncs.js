function createButtons(array) {
    $("#searchBtns").empty();
    for (var i = 0; i < array.length; i++) {
        var btn = $("<button>")
            .addClass('searchBtn')
            .attr('data-searchTerm', array[i])
            .text(array[i])
        $("#searchBtns").append(btn)
    }
}

function searchGiphy() {
    $("#gifs").empty();
    var searchTerm = $(this).attr("data-searchTerm");

    var qURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=GqrQ9Vd4B4JaCEUCk9Ci5VqWx5XZwBmZ&limit=10";

    $.ajax({
        url: qURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var heroDiv = $("<div>");
                var heroImage = $("<img>");
                var imgSRC = results[i].images.fixed_height_small_still.url
                console.log(imgSRC)
                heroImage.attr("src", imgSRC);
                heroImage.addClass("toggleAnimate")

                // heroDiv.append(p);
                heroDiv.append(heroImage);

                $("#gifs").prepend(heroDiv);
            }
        })
}

function handleImgClick() {
    console.log(this)
}