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

  let k = smallest;
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

  let resultsArr = [];
  function a() {
    let str = "";
    for (let i = 0; i < smallest; i++) {
      str = str + loginAttemptArr[i];
    }

    function b(str) {
      let index = checkIndex(str);

      if (index == true) {
        resultsArr.push(str);
        loginAttemptArr.splice(0, k);
        k = smallest;

        if (loginAttemptArr.length > 0) {
          if (loginAttemptArr.length < smallest) {
            return false;
          }
        }
        if (loginAttemptArr.length === 0) {
          return true;
        }

        if (loginAttemptArr.length >= smallest) {
          return a();
        }
      } else if (index == false) {
        if (loginAttemptArr[k] !== undefined) {
          if (k < highest) {
            str = str + loginAttemptArr[k];
            k = k + 1;
            return b(str);
          } else if (k >= highest) {
            return false;
          }
        } else {
          return false;
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
  passwordCracker(
    ["because", "can", "do", "must", "we", "what"],
    "wedowhatwemustbecausewecan"
  )
);
