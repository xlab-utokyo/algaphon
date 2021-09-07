//check if element has class that is playbutton 
//if yes, change class to pauseBtn and start playing audio using the audio attribute
//also find element with class playingBackground and change to that


var audioname = null;
var audio = null;

function playerBtnClick(e){
	if(e.classList.contains("archivePlayBtn")){
		audioname = e.getAttribute("filename");
		audio = new Audio(audioname);
		audio.play();

		//play this audio file

		//change the class to pause button now
		e.classList.remove("archivePlayBtn");
		e.classList.add("archivePauseBtn");

		var playerDiv = e.parentNode.getElementsByTagName('div')[0];
		playerDiv.classList.remove("inacArchivePlayer");
		playerDiv.classList.add("acArchivePlayer");

		return;
	}else if(e.classList.contains("archivePauseBtn")){
		if(audio!= null){
			//pause this audio file	
			audio.pause();
		}
		

		//change the class to play button now afetr pause has been clicked
		e.classList.remove("archivePauseBtn");
		e.classList.add("archivePlayBtn");

		var playerDiv = e.parentNode.getElementsByTagName('div')[0];
		playerDiv.classList.remove("acArchivePlayer");
		playerDiv.classList.add("inacArchivePlayer");
	}

	
}