import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));


function onPlay(data) {

}

//-----
// document.addEventListener(
//   'scroll',
//   _.throttle(

//1 параметр функция:
// () => {console.log('Scroll handler call every 300ms');},

//2йпараметр задержка:
// 300)
// );
