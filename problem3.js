// ----------------------Problem 3--------------------------

function swapChar(char) {
  const charCode = char.charCodeAt(0); // หารหัส ASCII ของตัวอักษร 'a' คือ 97 และ 'A' คือ 65

  let position;
  let position_changed;
  let charFromCode;
  //หาว่าตักอักษรอยู่ position ที่เท่าไหร่ แล้วทำการแปลงเป็นตรงกันข้าม
  if (charCode >= 65 && charCode <= 90) {
    // 65 - 90 (A-Z)
    position = charCode - 65 + 1;
    position_changed = 64 + (27 - position); // สลับ A => Z, B => Y, C => X , ...
    charFromCode = String.fromCharCode(position_changed);
    return charFromCode;
  } else if (charCode >= 97 && charCode <= 122) {
    // 97 - 122 (a-z)
    position = charCode - 97 + 1;
    position_changed = 96 + (27 - position); // สลับ a => z, b => y, c => x, ...
    charFromCode = String.fromCharCode(position_changed);
    return charFromCode;
  } else {
    // ถ้าตัวอักษรไม่ใช่ a-z หรือ A-Z ให้คืนค่าเป็นตัวเดิม
    return char;
  }
}
//test swapChar
/* console.log("b =>", swapChar("b"));
console.log("B =>", swapChar("B"));
console.log("Y =>", swapChar("Y"));
console.log("z =>", swapChar("z"));
console.log("3 =>", swapChar("3")); */

function swapWord(text) {
  let words = text.split(" ");
  let swapped_text = "";
  while (words.length > 0) {
    if (swapped_text) {
      swapped_text += " ";
    }
    swapped_text += words.pop();
  }

  return swapped_text;
}
//test swapWord
//console.log("Hello world =>", swapWord("svool dliow"));

class ReverseEncoder {
  constructor(data) {
    this.data = data;
  }

  encode() {
    const text = data.text;
    console.log(`Encode Before: ${text}`);
    //ข้อมูลต้องยังไม่ถูกเข้ารหัส ถึงจะทำงานได้
    if (!data.encoded_status) {
      let encoded_text = "";
      for (const c of text) {
        encoded_text += swapChar(c);
      }
      encoded_text = swapWord(encoded_text);
      console.log(`Encode After: ${encoded_text}`);
      data.text = encoded_text;
      data.encoded_status = true;
    } else {
      console.log(`Encode After: ข้อมูลถูกเข้ารหัสแล้ว ไม่สามารถทำซ้ำได้`);
    }
  }

  decode() {
    const text = data.text;
    console.log(`Decode Before: ${text}`);
    //ข้อมูลต้องเข้ารหัสแล้ว ถึงจะทำงานได้
    if (data.encoded_status) {
      let decoded_text = "";
      for (const c of text) {
        decoded_text += swapChar(c);
      }
      decoded_text = swapWord(decoded_text);
      console.log(`Decode After: ${decoded_text}`);
      data.text = decoded_text;
      data.encoded_status = false;
    } else {
      console.log(`Decode After: ข้อมูลยังไม่ถูกเข้ารหัส ไม่สามารถถอดรหัสได้`);
    }
  }
}

//Testcase
const data = { text: "hello world", encoded_status: false };
const reverseEncoder = new ReverseEncoder(data);

//Testcase1-1 (endcode)
console.log("Testcase1-1 (endcode)");
reverseEncoder.encode();
console.log("\n");

//Testcase1-2 (endcode) กรณีเข้ารหัสไปแล้ว
console.log("Testcase1-2 (endcode) กรณีเข้ารหัสไปแล้ว");
reverseEncoder.encode();
console.log("\n");

//Testcase2-1 (dedcode)
console.log("Testcase2-1 (dedcode)");
reverseEncoder.decode();
console.log("\n");

//Testcase2-2 (dedcode) กรณีข้อมูลยังไม่ได้เข้ารหัส
console.log("Testcase2-2 (dedcode) กรณีข้อมูลยังไม่ได้เข้ารหัส");
reverseEncoder.decode();
console.log("\n");
