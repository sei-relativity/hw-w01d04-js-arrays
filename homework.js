const summation = n => {
  let sum = 0;
  for (let i = 0; i < n + 1; i++) sum += i;
  console.log(sum);
};
summation(5);

const summationEven = n => {
  let sum = 0;
  for (let i = 0; i < n + 1; i++) i % 2 == 0 ? (sum += i) : sum;
  console.log(sum);
};
summationEven(5);

const reverse = w => {
  let res = "";
  for (i = w.length - 1; i >= 0; i--) res = res + w[i];
  console.log(res);
};
reverse("Muhannad");

const addDashes = a => {
  let res = "";
  for (let i = 0; i < a.length; i++)
    i === 0 ? (res += `${a[i]}`) : (res += `-${a[i]}`);
  console.log(res);
};
addDashes(["one", "two", "three"]);

const countUpAndDown = n => {
  let res = "";
  for (i = 1; i < 2 * n; i++)
    i <= n ? (res += `${i} `) : (res += `${2 * n - i} `);
  console.log(res);
};
countUpAndDown(3);

const wordsWithA = a => {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    for (j = 0; j < a[i].length; j++) {
      if (a[i][j] === "a") {
        res.push(a[i]);
        break;
      }
    }
  }
  console.log(res);
};
wordsWithA(["cat", "rabbiat", "dog", "frog"]); // should return ['cat', 'rabbit']

const wordsWithLetter = (letter, a) => {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    for (j = 0; j < a[i].length; j++) {
      if (a[i][j] === letter) {
        res.push(a[i]);
        break;
      }
    }
  }
  console.log(res);
};
wordsWithLetter("g", ["cat", "rabbit", "dog", "frog"]);

const longestWord = s => {
  let words = s.split(" ");
  let wordsLength = [];
  let res;
  for (i = 0; i < words.length; i++) wordsLength.push(words[i].length);
  res = words[wordsLength.indexOf(Math.max(...wordsLength))];
  console.log(res);
};
longestWord("The cat in the house"); // should return "house"

const largestEvenNumber = a => {
  let evenArray = [];
  let res;
  a.map(e => {
    e % 2 === 0 ? evenArray.push(e) : null;
  });
  res = Math.max(...evenArray);
  console.log(res);
};
largestEvenNumber([1, 2, 3, 10, 4, 7, 0]); // should return "10"
