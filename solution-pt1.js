const fs = require("fs");

const lines = fs.readFileSync("input.txt", "utf-8").trimEnd().split("\n");
let count = 0;

for (const line of lines) {
  const nums = line.split(" ").map(Number);

  if (isSafe(nums)) count++;
}

function isSafe(nums) {
  let dir;
  for (let i = 0; i < nums.length - 1; i++) {
    let calc = nums[i] - nums[i + 1];
    if (Math.abs(calc) > 3 || Math.abs(calc) === 0) {
      return false;
    } else if (calc < 0) {
      if (dir === "positive") return false;
      dir = "negative";
    } else if (calc > 0) {
      if (dir === "negative") return false;
      dir = "positive";
    }
  }
  return true;
}

console.log(count);
