function shout(cat) {
    return cat.toUpperCase();
  }

  function whisper(cat) {
    return cat.toLowerCase();
  }

  function logShout(cat) {
    console.log(cat.toUpperCase());
  }

  function logWhisper(cat) {
    console.log(cat.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    if (string === "Let's have dinner together!") {
        return "I would love to!";
    };
    
  }