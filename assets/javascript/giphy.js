$(document).ready(function () {
    var terms = ['Tony Stark', 'Captain America', 'Hulk']

    createButtons(terms);
    
    $(document).on("click", ".searchBtn", searchGiphy);
    $(document).on("click", ".toggleAnimate", handleImgClick);
    
    $("#createNewTerm").on("click", function (e) {
        e.preventDefault()
        var term = $("input[name=newTerm]").val()
        terms.push(term)
        createButtons(terms);
    })
})