var tags = [];

function process_tag_entry() {
    var text = $("#game_form_text").val().replace(/\s+/g, ' ');
    $("#game_form_text").val("");
    if (tags.length >= 5)
	return;
    var entries = text.split(' ');
    var entry;
    for (var e = 0; e < entries.length; e++) {
	entry = entries[e].replace(/\s+/g, ' ').toLowerCase();
	if (entry.length == 0)
	    continue;
	tags.push(entry);
	$("#game_tag_"+(tags.length-1)).html(entry);
	if (tags.length > 5)
	    return;
    }
}

$("#game_form").submit(function(e){
    e.preventDefault();
    console.log("Submissions");
    process_tag_entry();
});

$('#input_nickname').keypress(function(e) {
    if (e.which==13) { e.preventDefault(); }
});


function update() {
    var time = 60-parseInt(((new Date()).getTime()/1000)%60);
    $('#game_time').text(time);
}

setInterval(update, 500);
