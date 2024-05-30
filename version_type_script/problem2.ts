// ----------------------Problem 2--------------------------

namespace Problem2 {
  function compareCharacter(a: string, b: string): boolean {
    if (a > b) {
      return true;
    } else {
      return false;
    }
  }

  function isDigit(char: string): boolean {
    return char >= "0" && char <= "9";
  }

  function problem2(data: string[]): string[] {
    let ans: string[] = [];
    let champ: string = data[0];
    let i: number = 1;
    while (data.length > 0) {
      let challenger_changed: string = "";
      let champ_changed: string = "";

      for (let j: number = 1; j < data.length; j++) {
        let challenger: string = data[j];
        // ถ้าเป็นหลักหน่วยให้แทรกเลข 0 ไปข้างหน้าตัวนึง
        if (!isDigit(challenger.charAt(3))) {
          challenger_changed = challenger.replace(/(\d)/, "0$1");
        }
        if (!isDigit(champ.charAt(3))) {
          champ_changed = champ.replace(/(\d)/, "0$1");
        }

        if (
          compareCharacter(
            champ_changed ? champ_changed : champ,
            challenger_changed ? challenger_changed : challenger
          )
        ) {
          champ = challenger;
        }
      }

      //console.log(`Round ${i} Champ: ${champ}`);
      const indexRemovedElement: number = data.indexOf(champ);
      let removedElement: string = data.splice(indexRemovedElement, 1)[0];
      ans.push(removedElement);

      champ = data[0];
      i += 1;
    }

    return ans;
  }

  // Testcase
  const data1: string[] = ["TH19", "SG20", "TH2"];
  const expected1: string[] = ["SG20", "TH2", "TH19"];
  const data2: string[] = ["TH10", "TH3Netflix", "TH1", "TH7"];
  const expected2: string[] = ["TH1", "TH3Netflix", "TH7", "TH10"];

  console.log("Testcase 1");
  console.log("Input:", data1);
  console.log("Expected:", expected1);
  console.log("Output:", problem2(data1));
  console.log("\n");

  console.log("Testcase 2");
  console.log("Input:", data2);
  console.log("Expected:", expected2);
  console.log("Output:", problem2(data2));
  console.log("\n");
}
