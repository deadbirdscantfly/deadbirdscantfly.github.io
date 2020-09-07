//info.js 

function getSpotifyData() {
  	//document.getElementById("current").innerHTML = "changed.";

	fetch('https://api.spotify.com/v1/me/player/currently-playing?market=ES&additional_types=episode" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQDR2JjFxbofC8Wuiah-JUWMWzSTRb30-ylmRykq5YZXDDaUd9JF7r14NACdOYjoJfjP7lC0Ww3Hm7YqJcFV2D5kOtwqqnsK1676GT7K-WbU_utd5vp4CWba8N6HPXcMlGXXZLgVYscv-xyWHw')
	.then(response => response.json())
	.then(data => {
	  console.log(data) // Prints result from `response.json()` in getRequest
	})
	.catch(error => console.error(error))

}