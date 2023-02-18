//npm install @vimeo/player
import Player from '@vimeo/player';
import _ from 'lodash';

//import _ from 'lodash';
//const result = _.add(2, 3);
//console.log(result); // 5
//alert(result);
//var throttle = require('_.throttle');
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

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log("It's plays!");
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const currentTime = function (data) {
    /*
  localStorage.setItem(
    'videoplayer-current-time',
    JOSN.stringify(data.seconds)
  );
    let time = Number(localStorage.getItem('videoplayer-current-time'));
  console.log(time);*/
    let time = data.seconds;
    console.log(time);
    //localStorage.setItem('videoplayer-current-time', JOSN.stringify(data.seconds));
};

player.on("timeupdate", _.throttle(currentTime, 1000));//_.throttle(() => { currentTime }, 1000)); 

//throttle(() => { console.log("Scroll handler call every 300ms");  }, 300)
    
  