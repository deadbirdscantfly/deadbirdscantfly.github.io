//info.js

const last15button = document.getElementById('last15');
let table1 = document.getElementById('t1');

var lastfmData = {
	  baseURL:
	    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
	  user: "dumbphone",
	  api_key: config.lastfmapikey,
	  additional: "&format=json&limit=10"
	};

var getSetLastFM = function() {
	$.ajax({
		type: "GET",
		url:
		  lastfmData.baseURL +
		  lastfmData.user +
		  "&api_key=" +
		  lastfmData.api_key +
		  lastfmData.additional,
		dataType: "json",

		success: function(resp) {
		  recentTracks = resp.recenttracks.track; // object of 10 tracks
		  // console.log(recentTrack.track[0].album["#text"]) daydreamnation
		  let modifiedData = [{},{}, {}, {}, {}, {}, {}, {}, {}, {}];

		  for (let i = 0; i < 9; i++) {
			modifiedData[i] = {
			"index": i,
			"name": recentTracks[i].name,
			"album": recentTracks[i].album['#text'],
			"artist": recentTracks[i].artist['#text'],
			"timestamp": recentTracks[i].date["#text"]
			}
		  }
		  generateTableHead(table1, modifiedData); // doesnt need tracksdata
		  generateTable(table1, modifiedData);
		  
		}	
	})
}


var generateTableHead = function(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();

  let headers = ["", "song", "album", "artist", "timestamp"];
  for (let key of headers) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    
    th.appendChild(text);
    row.appendChild(th);
  }
}

var generateTable = function(table, data) {
	console.log(data)// data [{}, {}, {}]
  	for (let element of data) { // iterates
	    let row = table.insertRow();
	    
	    for (key in element) { //
	    	console.log("key:" + key)
		      let cell = row.insertCell();
		      let text = document.createTextNode(element[key]);
		      cell.style.fontSize = "9px";
		      cell.appendChild(text);
	    }
	  }
}

last15button.addEventListener('click', getSetLastFM);

