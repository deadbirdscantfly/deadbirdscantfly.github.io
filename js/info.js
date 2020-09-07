window.onload = function() {

	var lastfmData = {
	  baseURL:
	    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
	  user: "dumbphone",
	  api_key: config.lastfmapikey,
	  additional: "&format=json&limit=1"
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
	      var recentTrack = resp.recenttracks.track[0];
	      console.log(recentTrack)
	      var info = recentTrack.name + " by " + recentTrack.artist["#text"]
	      document.getElementById('indexmusic').innerHTML = info;
    		}
    	})	  
	}
	getSetLastFM()
};