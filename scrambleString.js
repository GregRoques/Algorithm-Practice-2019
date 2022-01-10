const loginToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FwaXMuY2Fwc3RvbmVsb2dpc3RpY3MuY29tL2NvbW1vbiIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzlkYWIyYTY1LWVkNGQtNDc0YS04OTc4LTY1ZDg1N2E1YjIxZS8iLCJpYXQiOjE2MTYxNjkwNTQsIm5iZiI6MTYxNjE2OTA1NCwiZXhwIjoxNjE2MTcyOTU0LCJhaW8iOiJFMlpnWUdpUW45aDBWbmwzcGMrODdHTXpIU3QxQUE9PSIsImFwcGlkIjoiYjM4NTllYTAtNzA0Zi00NmFmLWE2ZTYtNjBkYWY5ZjJiYzMxIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOWRhYjJhNjUtZWQ0ZC00NzRhLTg5NzgtNjVkODU3YTViMjFlLyIsIm9pZCI6ImM4Zjg0ODBkLTRlNjQtNGRjNS1hM2VmLWQ0ZmIzYmYyMThmMyIsInJoIjoiMC5BUmdBWlNxcm5VM3RTa2VKZUdYWVY2V3lIcUNlaGJOUGNLOUdwdVpnMnZueXZERVlBQUEuIiwicm9sZXMiOlsiQWRtaW4iLCJhc3NvY2lhdGVzIl0sInN1YiI6ImM4Zjg0ODBkLTRlNjQtNGRjNS1hM2VmLWQ0ZmIzYmYyMThmMyIsInRpZCI6IjlkYWIyYTY1LWVkNGQtNDc0YS04OTc4LTY1ZDg1N2E1YjIxZSIsInV0aSI6Ik9yQWM4RjBxQmtpTHQtQ0FJdGNoQUEiLCJ2ZXIiOiIxLjAifQ.QQtOdIg9CsKQ6Ea81XZNHwqAgome6vLZjFoh90WEl2oZ0gdCjducCUdGiTrNZiNSROU1TK2QuXuwA4ZNxvsP1EEj3znPelhd7iYMxPUOGk6qqXQRCHPEz_PTMEjJ0oVcrZXRn3QKsO5eXqLnWxswmpWvDUnO9YSged5Dzs1ClP8TQukWVrlchBSZ96cGcTSWN2uTxd8yxBDe0GGFcpSqtJHlZRxsmFxMOow-HUwsDLhZ7IAusdP8fBaamOVMJQf1FL70tKPmRGjKqBN7Ns97QhQSY7x41qEuPFHzi6KX7G-vFbvupvapwxQAhMEeUXP5sOXtzUwnFF8GD1_sgu7D7A";

function shuffled(str) {
  var shuffledString = "";
  str = str.split("");
  while (str.length > 0) {
    shuffledString += str.splice((str.length * Math.random()) << 0, 1);
  }
  return shuffledString;
}

const countCharacters = (string) => {
  const findVowelsRegEx = new RegExp(
    /[/[abcdefghijklmnopqrstuvwxyz1234567890._-]/,
    "g"
  );
  const matched = string.toLowerCase().match(findVowelsRegEx);
  return matched ? matched.length : 0;
};
const shuffleToken = shuffled(loginToken);

if (
  shuffleToken !== loginToken &&
  countCharacters(shuffleToken) === countCharacters(loginToken) &&
  countCharacters(shuffleToken) === loginToken.length
) {
  return console.log(true);
}
console.log("Nope!");