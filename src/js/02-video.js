//npm install @vimeo/player
import Player from '@vimeo/player';
import _ from 'lodash';

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const currentTime = function (data) {
    let time = JSON.stringify(data.seconds);
    console.log(time);
    localStorage.setItem(STORAGE_KEY, time);    
};
const readCurrentTimeFromLocalStorage = function()
{ 
    try { 
        const timeFromStorage = localStorage.getItem(STORAGE_KEY);
        return timeFromStorage ? JSON.parse(timeFromStorage) : 0.0;
    }
    catch (err) { 
        console.log(err);
    }
};

function onLoadTime() { 
    const time = Number(readCurrentTimeFromLocalStorage());
    console.log(`Previous time was t= ${time} s`);
    player.setCurrentTime(time);
    player.on("timeupdate", _.throttle(currentTime, 1000));
}
//player.on("timeupdate", _.throttle(currentTime, 1000));
onLoadTime();







///////////////// 
/*В подальших роботах це видалю, але треба для навчання. */

/*player.on('play', function () {
  console.log("It's plays!");
});*/

/*player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});*/

/* 
getCurrentTime(): Promise<number, Error>

Get the current playback position in seconds.

player.getCurrentTime().then(function(seconds) {
    // seconds = the current playback position
}).catch(function(error) {
    // an error occurred
});

setCurrentTime(seconds: number): Promise<number, (RangeError|Error)>

Set the current playback position in seconds. Once playback has started, if the player was paused, it will remain paused. Likewise, if the player was playing, it will resume playing once the video has buffered. Setting the current time before playback has started will cause playback to start.

You can provide an accurate time and the player will attempt to seek to as close to that time as possible. The exact time will be the fulfilled value of the promise.

player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
*/
/*
<iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>
 */
    
  