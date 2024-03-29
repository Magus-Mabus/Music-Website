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
    var minibutton = '';
    if(item['scd_btn_icn'] !== null && item['scd_btn_icn'] !== '' && typeof item['scd_btn_icn'] !== 'undefined'){
        minibutton = `<a class="update-secondary" href=${item['secondary_btn_url']}>` + 
        `<i class="${item['scd_btn_icn']} secondary-icon"></i>` + 
        '</a>';
    }
    document.getElementById("upcoming-panel").innerHTML +=
        '<div class="update-break"></div>' +
        '<div class = "update">';
    if (item['img_url'] != null && item['img_url'] != "<br>") {
        document.getElementById("upcoming-panel").innerHTML += '<img src="' + item['img_url'] + '" alt="" class="update-image">';
    }
    document.getElementById("upcoming-panel").innerHTML +=
    '<p class="update-title">' + item['title'] + ' </p>' +
        '<p class="update-details">' + item['description'] +
        '<br>' + item['details'] + '</p>' + 
        '<a class="transparent" href="' + item['btn_url'] + '" target="_blank">' +
        '<div class="sign-up-button">' + item['btn_txt'] + '</div>' +
        '</a>' + 
        '<br>' + 
        minibutton + 
        '</div>' + 
        '<br>'; 
}

$.getJSON("featured.json", function (json) {
    featured = json['featured'];
    featured.forEach(fillFeatured);
});

function fillFeatured(item) {
    //Find the updates panel and add each update to it with the following format; 
    //the "format" is just a huge string that mimics HTML that we can insert into the page
    document.getElementById("featured-panel").innerHTML +=
        '<div class="playlist-break"></div>' +
        '<div class = "playlist">' +
        `<p class="playlist-title">${item['title']}</p>` +
        `<p class="playlist-details">${item['description']}` +
        '<br>' +
        `Original playlist by ${item['creator']}</p>` +
        `<a class="transparent" href=" ${item['playlist_url']} " target="_blank">` +
        `<div class = "platform-flex"><img src=" ${item['platform_img']} " alt="" class="icon-image"> </div>` +
        '</a>' +
        '</div>' +
        '<br>';
}