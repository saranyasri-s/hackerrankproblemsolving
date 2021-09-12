function passwordCracker(passwords, loginAttempt) {
  // let passwordsArr = [];
  // let smallStr = "";
  // for (let letter of passwords) {
  //   if (letter === " ") {
  //     passwordsArr.push(smallStr);
  //     smallStr = "";
  //   } else {
  //     smallStr = smallStr + letter;
  //   }
  // }
  // passwordsArr.push(smallStr);
  // console.log(passwordsArr);
  let smallest = Infinity;
  let highest = 0;
  for (let i = 0; i < passwords.length; i++) {
    if (passwords[i].length < smallest) {
      smallest = passwords[i].length;
    }
    if (passwords[i].length > highest) {
      highest = passwords[i].length;
    }
  }

  function checkIndex(str) {
    if (passwords.indexOf(str) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  let loginAttemptArr = [];
  for (let letter of loginAttempt) {
    loginAttemptArr.push(letter);
  }
  if (loginAttemptArr.length < highest) {
    highest = loginAttemptArr.length;
  }
  let k = highest;
  let resultsArr = [];
  function a() {
    let str = "";
    for (let i = 0; i < k; i++) {
      str = str + loginAttemptArr[i];
    }

    function b(str) {
      let index = checkIndex(str);

      if (index == true) {
        resultsArr.push(str);
        loginAttemptArr.splice(0, k);
        k = highest;

        if (loginAttemptArr.length > 0) {
          if (loginAttemptArr.length < smallest) {
            return false;
          }
        }
        if (loginAttemptArr.length === 0) {
          return true;
        }

        if (loginAttemptArr.length >= smallest) {
          if (loginAttemptArr.length >= highest) {
            k = highest;
          } else {
            k = loginAttemptArr.length;
          }
          return a();
        }
      } else if (index == false) {
        str = str.slice(0, -1);
        console.log(str);
        k = k - 1;
        if (str.length < smallest) {
          return false;
        } else {
          return b(str);
        }
      }
    }
    return b(str);
  }
  let c = a();

  if (c == false) {
    return "WRONG PASSWORD";
  } else {
    let resultStr = "";
    for (let i = 0; i < resultsArr.length - 1; i++) {
      resultStr = resultStr + resultsArr[i] + " ";
    }
    resultStr = resultStr + resultsArr[resultsArr.length - 1];

    return resultStr;
  }
}
console.log(
  passwordCracker(["we", "web", "adaman", "arcod"], "webarcodwebadamanweb")
);
