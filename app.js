const p1 = document.querySelector("#p1-button");
const p2 = document.querySelector("#p2-button");

const p1Display = document.querySelector("#p1-score-board");
const p2Display = document.querySelector("#p2-score-board");

let P1Score = 0;
let P2Score = 0;

// batasan
let winPoint = 3;
let gameOver = false;

p1.addEventListener("click", () => {
  //   console.dir(p1Display);
  //   kita pake textContent, dapat dari mana? Dari console.dir(p1Display);. trus cari isi textnya di html isinya "0"

  if (!gameOver) {
    // operator logika "!" menyatakan sebaliknya, jadi ketika masih sebaliknya maka decision akan dijalankan
    P1Score += 1;
    if (P1Score === winPoint) {
      // mengubah isi "gameOver", jadi akan memberhentikan decsiison karena "!gameOver = gameOver". jadi di break
      gameOver = true;
    }
    p1Display.textContent = P1Score;
  }
});

p2.addEventListener("click", () => {
  if (!gameOver) {
    P2Score += 1;
    if (P2Score === winPoint) {
      gameOver = true;
    }
    p2Display.textContent = P2Score;
  }
});

const reset = document.querySelector("#reset");
// function reset
function ulang() {
  gameOver = false;
  P1Score = 0;
  P2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
}

reset.addEventListener("click", ulang);

const winPointOption = document.querySelector("#pilihanNilai");

// change itu datanya homogen gak bisa duplikat
winPointOption.addEventListener("change", function () {
  // parseInt(), digunakan untuk mengubah string ke integer
  winPoint = parseInt(this.value);

  ulang();
});
