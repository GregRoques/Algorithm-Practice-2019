// Tabata Timer

// =========================== set Timer Variables
let intervalCount = 0;
let workoutTimerCount = 0;

const intervalTimeSeconds = 30;
const restTimeSeconds = 10;

const minutes = 5;
const totalWorkoutTime = minutes * 60;

// =========================== start clock
const startTimer = setInterval(() => {
  workoutTimerCount++;
  if (workoutTimerCount === totalWorkoutTime) {
    const stopMessage = "Workout Complete";
    stopInterval(stopMessage);
  }
}, 1000);

// =========================== Stop Interval
const stopInterval = (message = "Rest") => {
  clearInterval(startInterval);
  console.log(message);
  intervalCount = 0;
};

// =========================== Interval Count Function
const startIntervalActivity = () => {
  intervalCount++;
  console.log(intervalCount);

  const countDown = intervalTimeSeconds - intervalCount;

  if (countDown <= 3) {
    const countDownText = countDown === 3 ? "Prepare to rest in" : "...";
    console.log(`${countDownText} ${countDown}`);
  }

  // === Stop Inveral Function
  if (intervalCount === intervalTimeSeconds) {
    stopInterval();
    // === Restart inveral after restTime
    setTimeout(() => {
      beginInterval();
    }, restTimeSeconds * 1000);
  }
};

// =========================== Start Interval when app is initiated
let startInterval = setInterval(() => {
  console.log("Let's get it!");
  startIntervalActivity();
}, 1000);

// =========================== Restart Interval after Rest Cycle
function beginInterval() {
  startInterval = setInterval(startIntervalActivity, 1000);
}