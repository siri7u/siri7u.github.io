var highLightedWord = ["select", "insert", "update", "from", "where", "case", "when", "else", "end", "and"];
var regexFromMyArray = new RegExp(highLightedWord.join("|"), 'ig');

$('#board').keyup(function(event) {
    document.getElementById('dummy').innerHTML = $('#board').html().replace(regexFromMyArray, function(str) {
        return '<span class="highlighted">' + str + '</span>'
    })
})

var target = $("#dummy");

$("#board").scroll(function() {
    target.prop("scrollTop", this.scrollTop)
        .pr
    op("scrollLeft", this.scrollLeft);
});