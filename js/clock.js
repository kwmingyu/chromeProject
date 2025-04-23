const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

const modifyNumber = (number) => {
  return parseInt(number) < 10 ? "0" + number : number;
};

const updateClock = () => {
  const nowDate = new Date();
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  let year = modifyNumber(nowDate.getFullYear());
  let month = modifyNumber(nowDate.getMonth() + 1);
  let date = modifyNumber(nowDate.getDate());
  let day = week[nowDate.getDay()];
  let hour = modifyNumber(nowDate.getHours());
  let minute = modifyNumber(nowDate.getMinutes());
  let second = modifyNumber(nowDate.getSeconds());
  setNowDate(year, month, date, day);
  setNowTime(hour, minute, second);
};

const setNowDate = (year, month, date, day) => {
  dateElement.textContent = `${year}년 ${month}월 ${date}일 ${day} `;
};

const setNowTime = (hour, minute, second) => {
  timeElement.textContent = `${hour} : ${minute} : ${second}`;
};

updateClock();
setInterval(updateClock, 1000);
