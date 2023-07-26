// ****************************************
// ** 関数型プログラミング - アプリケーションの構築
// ****************************************
// * 命令型プログラミング
// 現在の時刻を毎秒ログ出力する
setInterval(logClockTime, 1000);

function logClockTime() {
  // フォーマットされた現在時刻を取得する
  let time = getClockTime();

  // コンソールをクリアしてからログ出力する
  console.clear();
  console.log(time);
}

function getClockTime() {
  // 現在時刻のDateオブジェクトを取得する
  let date = new Date();
  let time = "";

  // Dateオブジェクトの時刻を表すオブジェクトに変換する
  time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM",
  };

  // 午前/午後を意識した時刻に変換する
  if (time.hours === 12) {
    time.ampm = "PM";
  } else if (time.hours > 12) {
    time.ampm = "PM";
    time.hours -= 12;
  }

  // 時の前にゼロを付ける
  if (time.hours < 10) {
    time.hours = "0" + time.hours;
  }

  // 分の前にゼロを付ける
  if (time.minutes < 10) {
    time.minutes = "0" + time.minutes;
  }

  // 秒の前にゼロを付ける
  if (time.seconds < 10) {
    time.seconds = "0" + time.seconds;
  }

  // 時刻をhh:mm:ss AM/PMの形式にする
  return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
}

// 宣言型プログラミング
const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = (message) => console.log(message);

const serializeClockTime = (date) => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
});
const civilianHours = (clockTime) => ({
  ...clockTime,
  hous: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});
const appendAMPM = (clockTime) => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? "PM" : "AM",
});

const display = (target) => (time) => target(time);

const formatClock = (format) => (time) =>
  format
    .replace("hh", time.hours)
    .replace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm);

const prependZero = (key) => (clockTime) => ({
  ...clockTime,
  [key]: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key],
});

const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((composed, f) => f(composed), arg);

const convertToCivilainTime = (clockTime) =>
  compose(appendAMPM, civilianHours)(clockTime);

const doubleDigits = (civilianTime) =>
  compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
  )(civilianTime);

const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,
      serializeClockTime,
      convertToCivilainTime,
      doubleDigits,
      formatClock("hh:mm:ss tt"),
      display(log)
    ),
    oneSecond()
  );

startTicking();
