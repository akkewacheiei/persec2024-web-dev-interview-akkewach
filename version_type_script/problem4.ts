// ----------------------Problem 4--------------------------

namespace Problem4 {
  function autocomplete(
    search: string,
    items: string[],
    maxResult: number
  ): string[] {
    let ans: string[] = [];
    const search_lower: string = search.toLowerCase();
    const search_length: number = search_lower.length;

    let items_filtered: string[] = items.filter((item) =>
      item.toLowerCase().includes(search_lower)
    );

    // ค้นหาตำแหน่งที่ค้นพบคำ search และกำหนดเป็น position_found
    let indices: { word: string; position_found: number }[] = [];
    // O(n^2)
    for (let j: number = 0; j < items_filtered.length; j++) {
      const str: string = items_filtered[j].toLowerCase();
      for (let i: number = 0; i < str.length; i++) {
        if (
          str.substring(i, i + search_length).toLowerCase() === search_lower
        ) {
          indices.push({ word: items_filtered[j], position_found: i });
        }
      }
    }

    // เรียงสมาชิกจาก position_found จากมากไปน้อย
    indices.sort((a, b) => b.position_found - a.position_found);

    // pop สมาชิก indices มาใส่ ก็จะสลับเป็นเรียงจาก position_found น้อยไปมาก
    const numb_round: number =
      maxResult < indices.length ? maxResult : indices.length;
    for (let k: number = 0; k < numb_round; k++) {
      const indice = indices.pop();
      if (indice) {
        ans.push(indice.word);
      }
    }

    return ans;
  }

  // Testcase1
  const search1: string = "th";
  const items1: string[] = ["Mother", "Think", "Worthy", "Apple", "Android"];
  const maxResult1: number = 2;
  const expected1: string[] = ["Think", "Mother"];
  console.log("Testcase1");
  console.log(
    `Input: search = "${search1}" | items = [${items1}] | maxResult = ${maxResult1}`
  );
  console.log("Expected:", expected1);
  console.log("Output:", autocomplete(search1, items1, maxResult1));
  console.log("\n");

  // Testcase2
  const search2: string = "th";
  const items2: string[] = ["Mother", "Think", "Worthy", "Apple", "Android"];
  const maxResult2: number = 4;
  const expected2: string[] = ["Think", "Mother", "Worthy"];
  console.log("Testcase2");
  console.log(
    `Input: search = "${search2}" | items = [${items2}] | maxResult = ${maxResult2}`
  );
  console.log("Expected:", expected2);
  console.log("Output:", autocomplete(search2, items2, maxResult2));
  console.log("\n");

  // Testcase3
  const search3: string = "ther";
  const items3: string[] = ["Mother", "Think", "Worthy", "Apple", "Android"];
  const maxResult3: number = 2;
  const expected3: string[] = ["Mother"];
  console.log("Testcase3");
  console.log(
    `Input: search = "${search3}" | items = [${items3}] | maxResult = ${maxResult3}`
  );
  console.log("Expected:", expected3);
  console.log("Output:", autocomplete(search3, items3, maxResult3));
  console.log("\n");
}
