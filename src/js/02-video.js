//npm install @vimeo/player
import Player from '@vimeo/player';
import { throttle } from 'lodash';

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

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on('play', function () { console.log("It's works!"); });