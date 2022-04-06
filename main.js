// Write class below
/*
A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. 
For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.
Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should 
have two methods:
encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet
 based on the set shift value.
decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based
 on the set shift value.
In both methods, any character outside the alphabet should remain the same.
But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.

 */
// class ShiftCipher {
//   constructor(shift) {
//     this.shift = shift;
//   }
//   encrypt(plainString) {
//     let encryptString = "";
//     const tempString = plainString.toUpperCase();

//     for (let i = 0; i < tempString.length; i++) {
//       let charNum = tempString.charCodeAt(i);
//       console.log(charNum);
//       if (charNum <= 90 && charNum >= 65) {
//         charNum += this.shift;
//         if (charNum > 90) {
//           charNum -= 26;
//         }
//       }
//       encryptString += String.fromCharCode(charNum);
//     }
//     return encryptString;
//   }

//   decrypt(encryptString) {
//     let decryptString = "";
//     const tempString = encryptString.toLowerCase();

//     for (let i = 0; i < tempString.length; i++) {
//       let charNum = tempString.charCodeAt(i);

//       if (charNum <= 122 && charNum >= 97) {
//         charNum -= this.shift;
//         if (charNum < 97) {
//           charNum += 26;
//         }
//       }
//       decryptString += String.fromCharCode(charNum);
//     }
//     return decryptString;
//   }
// }

// const cipher = new ShiftCipher(2);
// console.log(cipher.encrypt("I love to code!"));
// console.log(cipher.decrypt("K <3 OA RWRRA"));
class ShiftCipher {
  constructor(incremee) {
    this.incremee = incremee;
  }
  encrypt(string) {
    let ustring = string.toUpperCase();
    let newString = "";
    for (let i = 0; i < ustring.length; i++) {
      let unicodec = ustring.charCodeAt(i);
      if (unicodec >= 65 && unicodec <= 90) {
        unicodec += this.incremee;
        if (unicodec > 90) {
          unicodec -= 26;
        }
      }
      newString += String.fromCharCode(unicodec);
    }

    return newString;
  }
  decrypt(string) {
    let ustring = string.toLowerCase();
    let newString = "";
    for (let i = 0; i < ustring.length; i++) {
      let unicodec = ustring.charCodeAt(i);
      if (unicodec >= 97 && unicodec <= 122) {
        unicodec -= this.incremee;
        if (unicodec < 97) {
          unicodec += 26;
        }
      }
      newString += String.fromCharCode(unicodec);
    }

    return newString;
    f;
  }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt("I love to code!"));
console.log(cipher.decrypt("K <3 OA RWRRA"));
