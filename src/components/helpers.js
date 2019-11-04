import Icon from '../assests/favicon.ico';
import Alarm from '../assests/bus-horn.mp3';

export function notify(state) {
  const audio = new Audio();
  audio.src = Alarm;
  audio.play();

  const [title, body] = state === 'break' ? ['🧘Break Time!', "It's time for your break, disconnect yourself from your work to be more productive in the next session"] : ['⚒️Work Time', "It's time to work, Remember why you started and make every minute count"]

  const options = {
    body,
    image: Icon,
  };

  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
  } else if (Notification.permission === 'granted') {
    new Notification(title, options);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification(title, options);
      }
    });
  }
  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}
