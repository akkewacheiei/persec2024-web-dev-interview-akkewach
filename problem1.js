// ----------------------Problem 1--------------------------

function characterToNum(character) {
  switch (character) {
    case "a":
      return 10;
    case "b":
      return 11;
    case "c":
      return 12;
    case "d":
      return 13;
    case "e":
      return 14;
    case "f":
      return 15;
    default:
      return character;
  }
}

function problem1(hex) {
  let ans = { r: 0, g: 0, b: 0 };

  hex = hex.toLowerCase();
  //ถ้า hex เป็นรูปแบบย่อ ให้เปลี่ยนเป็นรูปแบบเต็ม
  if (hex.length === 4) {
    for (let i = 0; i < 3; i++) {
      hex += hex.charAt(3);
    }
  }

  const r1 = characterToNum(hex.charAt(1));
  const r2 = characterToNum(hex.charAt(2));
  const g1 = characterToNum(hex.charAt(3));
  const g2 = characterToNum(hex.charAt(4));
  const b1 = characterToNum(hex.charAt(5));
  const b2 = characterToNum(hex.charAt(6));

  //convert hex to dec
  const r_sum = r1 * 16 + parseInt(r2);
  const g_sum = g1 * 16 + parseInt(g2);
  const b_sum = b1 * 16 + parseInt(b2);
  ans.r = r_sum;
  ans.g = g_sum;
  ans.b = b_sum;
  return ans;
}

//Testcase
const hex1 = "#FF9933";
const expected1 = { r: 255, g: 153, b: 51 };
const hex2 = "#ff9933";
const expected2 = { r: 255, g: 153, b: 51 };
const hex3 = "#FFF";
const expected3 = { r: 255, g: 255, b: 255 };
const hex4 = "#000";
const expected4 = { r: 0, g: 0, b: 0 };

console.log("Testcase 1");
console.log(`Input: hex = ${hex1}`);
console.log("Expected:", expected1);
console.log("Output:", problem1(hex1)); //Expected { r: 255, g: 153, b: 51 }
console.log("\n");

console.log("Testcase 2");
console.log(`Input: hex = ${hex2}`);
console.log("Expected:", expected2);
console.log("Output:", problem1(hex2)); //Expected { r: 255, g: 153, b: 51 }
console.log("\n");

console.log("Testcase 3");
console.log(`Input: hex = ${hex3}`);
console.log("Expected:", expected3);
console.log("Output:", problem1(hex3)); //Expected { r: 255, g: 255, b: 255 }
console.log("\n");

console.log("Testcase 4");
console.log(`Input: hex = ${hex3}`);
console.log("Expected:", expected4);
console.log("Output:", problem1(hex4)); //Expected { r: 0, g: 0, b: 0 }
console.log("\n");
