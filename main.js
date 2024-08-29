document.getElementById("start").addEventListener('click', go);

var Gameview = document.getElementById("comment");
var Gamebtn = document.getElementById("GameList");


function go() {
    var blank = document.getElementById("comment");
    blank.innerHTML = ' ';
    playGame();
}

function playGame() {

    Gameview.innerHTML = '<p>시작하겠다냥!!</p><span>가위,바위!!</span>';
    Gameview.classList.replace('btn', 'btnList');
    가위바위보();

    if (Gamebtn.style.display = 'none') {
        Gamebtn.style.display = 'block';
    } else {
        Gamebtn.style.display = 'none';
    }
}

// function 시간제한() {
//     var countDown = 10;
//     var timesUp = setInterval(function () {
//         countDown--;
//         if (countDown == 0) {
//             Gameview.innerHTML = '<p>타임 업!</p><span>빨리 해야 저녁밥이 만들어진다냥~</span><button onclick="playGame();" id="reply" class="btn">다시하기</button > ';
//             Gamebtn.style.display = 'none';
//             clearInterval(timesUp);
//         }
//     }, 1000);
// } 보류



function 가위바위보() {
    var 선택지 = document.querySelectorAll('#start');
    let 횟수 = 0;
    let 제한 = 5;
    let 목숨 = document.getElementById('life');


    if (목숨.style.display = "none") {
        목숨.style.display = "block";
    } else {
        목숨.style.display = "none";
    }


    선택지.forEach((선택지) => {
        선택지.addEventListener('click', (e) => {
            var gameChoice = ["가위", "바위", "보"];
            var random = Math.floor(Math.random() * gameChoice.length);
            var computerChoice = gameChoice[random];
            let 결정 = [];
            결정.push(e.target.value);
            let 내선택 = 결정.toString();
            let 컴터선택 = computerChoice;
            let 컴터결정 = document.getElementById('comment');

            console.log(횟수);
            console.log(제한);




            if (내선택 == "가위" && 컴터선택 == "보" || 내선택 == "바위" && 컴터선택 == "가위" || 내선택 == "보" && 컴터선택 == "바위") {
                컴터결정.innerHTML = `<p>${computerChoice}</p><span>이겼어요!</span>`
                횟수++;
                제한--;
            } else if (내선택 == "가위" && 컴터선택 == "바위" || 내선택 == "바위" && 컴터선택 == "가위" || 내선택 == "보" && 컴터선택 == "가위") {
                컴터결정.innerHTML = `<p>${computerChoice}</p><span>졌어요ㅠㅠ</span>`
                제한--
            } else {
                컴터결정.innerHTML = `<p>${computerChoice}</p><span>비겼어요.</span>`
                제한--;
            }
            목숨.innerHTML = 제한;
            return 결과();

            function 결과() {
                if (제한 == 0 && 횟수 == 5) {
                    Gamebtn.style.display = 'none';
                    Gameview.innerHTML = '<p>저녁은 연어스테이크!!</p><span>호화로운 저녁밥이다냥!</span><br><button onclick="playGame();" id="reply" class="btn">다시하기</button >'
                    return

                } else if (제한 == 0 && 횟수 == 4) {
                    Gamebtn.style.display = 'none';
                    Gameview.innerHTML = '<p>저녁은 생선구이!</p><span>역시 생선짱!</span><br><button onclick="playGame();" id="reply" class="btn">다시하기</button >'
                    return

                } else if (제한 == 0 && 횟수 == 3) {
                    Gamebtn.style.display = 'none';
                    Gameview.innerHTML = '<p>저녁은 게살!</p><span>좋다냥♥</span><br><button onclick="playGame();" id="reply" class="btn">다시하기</button >'
                    return

                } else if (제한 == 0 && 횟수 == 2) {
                    Gamebtn.style.display = 'none';
                    Gameview.innerHTML = '<p>저녁은 참치캔!</p><span>그나마 괜춘해냥</span><br><button onclick="playGame();" id="reply" class="btn">다시하기</button >'
                    return

                } else if (제한 == 0 && 횟수 == 1) {
                    Gamebtn.style.display = 'none';
                    Gameview.innerHTML = '<p>저녁은 츄르!</p><span>간식이 저녁이다냥</span><br><button onclick="playGame();" id="reply" class="btn">다시하기</button >'
                    return
                } else if (제한 == 0 && 횟수 <= 0) {
                    Gamebtn.style.display = 'none';
                    Gameview.innerHTML = '<p>제한 끝!</p><span>기회 5번 끝났다냥</span><br><button onclick="playGame();" id="reply" class="btn">다시하기</button >'
                }
            }
        });
    })

}



// function playGame() {
//     console.log("Let's play rock,scissors, paper!");
//     console.log("rock = 1, scissors = 2, paper = 3");
// }

// function playRound(humanChoice, computerChoice) {
//     let count = 5;
//     let humanScore = 0;
//     let computerScore = 0;
//     while (count > 0) {
//         humanChoice = prompt("choose it!");
//         computerChoice = Number(Math.random() * 3);
//         if (humanChoice < computerChoice) {
//             console.log("you win");
//             humanScore++;
//         } else if (humanChoice > computerChoice) {
//             console.log("you lose");
//             computerScore++;
//         }
//         count--;
//     }
//     if (count == 0) {
//         console.log("Time's up!");
//     }
//     humanScore > computerScore ? document.write("인간 승리!") : document.write("기계 인간 승리!");
// }

// playGame();
// playRound();

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);