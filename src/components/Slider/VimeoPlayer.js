import Vimeo from '@vimeo/player'

export const VimeoPlayer = () => {
  var options01 = {
    id: '231043632',
    background: 'true'
  }
  var options02 = {
    id: '252174194',
    background: 'true'
  }
  var options03 = {
    id: 447572061,
    background: true
  }

  var video01Player = new Vimeo.Player('video01', options01)
  var video02Player = new Vimeo.Player('video02', options02)
  var video03Player = new Vimeo.Player('video03', options03)
  // video01Player.setVolume(0);

  video01Player.on('play', function() {
    console.log('Played the first video');
  })
}

