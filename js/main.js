const secondsHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');

const hoursHand = document.querySelector('.hour');

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;

  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000);
