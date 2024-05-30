// ----------------------Problem 3--------------------------

namespace Problem3 {
  function swapChar(char: string): string {
    const charCode = char.charCodeAt(0); // หารหัส ASCII ของตัวอักษร 'a' คือ 97 และ 'A' คือ 65

    let position: number;
    let position_changed: number;
    let charFromCode: string;
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

  // test swapChar
  /* console.log("b =>", swapChar("b"));
  console.log("B =>", swapChar("B"));
  console.log("Y =>", swapChar("Y"));
  console.log("z =>", swapChar("z"));
  console.log("3 =>", swapChar("3")); */

  function swapWord(text: string): string {
    let words: string[] = text.split(" ");
    let swapped_text: string = "";
    while (words.length > 0) {
      if (swapped_text) {
        swapped_text += " ";
      }
      swapped_text += words.pop();
    }

    return swapped_text;
  }

  // test swapWord
  // console.log("Hello world =>", swapWord("svool dliow"));

  interface Data {
    text: string;
    encoded_status: boolean;
  }

  class ReverseEncoder {
    data: Data;

    constructor(data: Data) {
      this.data = data;
    }

    encode(): void {
      const text = this.data.text;
      console.log(`Encode Before: ${text}`);
      // ข้อมูลต้องยังไม่ถูกเข้ารหัส ถึงจะทำงานได้
      if (!this.data.encoded_status) {
        let encoded_text = "";
        for (const c of text) {
          encoded_text += swapChar(c);
        }
        encoded_text = swapWord(encoded_text);
        console.log(`Encode After: ${encoded_text}`);
        this.data.text = encoded_text;
        this.data.encoded_status = true;
      } else {
        console.log(`Encode After: ข้อมูลถูกเข้ารหัสแล้ว ไม่สามารถทำซ้ำได้`);
      }
    }

    decode(): void {
      const text = this.data.text;
      console.log(`Decode Before: ${text}`);
      // ข้อมูลต้องเข้ารหัสแล้ว ถึงจะทำงานได้
      if (this.data.encoded_status) {
        let decoded_text = "";
        for (const c of text) {
          decoded_text += swapChar(c);
        }
        decoded_text = swapWord(decoded_text);
        console.log(`Decode After: ${decoded_text}`);
        this.data.text = decoded_text;
        this.data.encoded_status = false;
      } else {
        console.log(
          `Decode After: ข้อมูลยังไม่ถูกเข้ารหัส ไม่สามารถถอดรหัสได้`
        );
      }
    }
  }

  // Testcase
  const data: Data = { text: "hello world", encoded_status: false };
  const reverseEncoder = new ReverseEncoder(data);

  // Testcase1-1 (encode)
  console.log("Testcase1-1 (encode)");
  reverseEncoder.encode();
  console.log("\n");

  // Testcase1-2 (encode) กรณีเข้ารหัสไปแล้ว
  console.log("Testcase1-2 (encode) กรณีเข้ารหัสไปแล้ว");
  reverseEncoder.encode();
  console.log("\n");

  // Testcase2-1 (decode)
  console.log("Testcase2-1 (decode)");
  reverseEncoder.decode();
  console.log("\n");

  // Testcase2-2 (decode) กรณีข้อมูลยังไม่ได้เข้ารหัส
  console.log("Testcase2-2 (decode) กรณีข้อมูลยังไม่ได้เข้ารหัส");
  reverseEncoder.decode();
  console.log("\n");
}
