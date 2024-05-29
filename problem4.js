// ----------------------Problem 4--------------------------

function autocomplete(search, items, maxResult) {
  let ans = [];
  const search_lower = search.toLowerCase();
  const search_length = search_lower.length;

  let items_filered = items.filter((item) =>
    item.toLowerCase().includes(search_lower)
  );

  // ค้นหาตำแหน่งที่ค้นพบคำ search และกำหนดเป็น position_found
  let indices = [];
  // O(n^2)
  for (let j = 0; j < items_filered.length; j++) {
    const str = items_filered[j].toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (str.substring(i, i + search_length).toLowerCase() === search_lower) {
        indices.push({ word: items_filered[j], position_found: i });
      }
    }
  }

  //เรียงสมาชิกจาก position_found จากมากไปน้อย
  indices.sort(function (a, b) {
    return b.position_found - a.position_found;
  });

  //pop สมาชิก indices มาใส่ ก็จะสลับเป็นเรียงจาก position_found น้อยไปมาก
  const numb_round = maxResult < indices.length ? maxResult : indices.length;
  for (let k = 0; k < numb_round; k++) {
    const indice = indices.pop();
    ans.push(indice.word);
  }

  return ans;
}

//Testcase1
const search = "th";
const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
const maxResult = 2;
const expected = ["Think", "Mother"];
console.log("Testcase1");
console.log(
  `Input: search = "${search}" | items = [${items}] | maxResult = ${maxResult} `
);
console.log("Expected:", expected);
console.log("Output:", autocomplete(search, items, maxResult));
console.log("\n");

//Testcase2
const search2 = "th";
const items2 = ["Mother", "Think", "Worthy", "Apple", "Android"];
const maxResult2 = 4;
const expected2 = ["Think", "Mother", "Worthy"];
console.log("Testcase2");
console.log(
  `Input: search = "${search2}" | items = [${items2}] | maxResult = ${maxResult2} `
);
console.log("Expected:", expected2);
console.log("Output:", autocomplete(search2, items2, maxResult2));
console.log("\n");

//Testcase3
const search3 = "ther";
const items3 = ["Mother", "Think", "Worthy", "Apple", "Android"];
const maxResult3 = 2;
const expected3 = ["Mother"];
console.log("Testcase3");
console.log(
  `Input: search = "${search3}" | items = [${items3}] | maxResult = ${maxResult3} `
);
console.log("Expected:", expected3);
console.log("Output:", autocomplete(search3, items3, maxResult3));
console.log("\n");
