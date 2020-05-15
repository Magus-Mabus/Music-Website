var updates;

//using jquery fill the updates object with the updates.json updates array.
$.getJSON("updates.json", function (json) {
    //once it's done...
    updates = json['updates'];
    updates.forEach(fillUpdates); //for each of the updates, do the function "fill updates"
});

function fillUpdates(item) {
    //Find the updates panel and add each update to it with the following format; 
    //the "format" is just a huge string that mimics HTML that we can insert into the page
    document.getElementById("upcoming-panel").innerHTML +=
        '<div class="update-break"></div>' +
        '<div class = "update">' +
        '<img src="' + item['img_url'] + '" alt="" class="update-image">' +
        '<p class="update-title">' + item['title'] + ' </p>' +
        '<p class="update-details">' + item['description'] +
        '<br>' + item['details'] + '</p>' +
        '<a class="transparent" href="' + item['btn_url'] + '" target="_blank">' +
        '<div class="sign-up-button">' + item['btn_txt'] + '</div>' +
        '</a>' +
        '</div>' +
        '<br>';
}