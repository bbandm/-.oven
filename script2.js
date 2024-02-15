function updateCurrentTime() {
    var currentTimeElement = document.getElementById('currentTime');
    var now = new Date();
  
    var hours = now.getHours();
    var minutes = now.getMinutes();
  
    var ampm = hours >= 12 ? '오후' : '오전';
    hours = hours % 12;
    hours = hours ? hours : 12;
  
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
  
    var currentTimeText = hours + ':' + minutes;
    currentTimeElement.textContent = currentTimeText;
  }
  
  setInterval(updateCurrentTime, 60000);
  updateCurrentTime();

window.onload = function() {
    // app.html 페이지에 정의된 openModal2 함수 호출
    window.openModal();
  };
  const contentContainer = document.querySelector('.other-videos');
    const toolbar = document.querySelector('.toolbar');

    function handleVisibility() {
      const contentRect = contentContainer.getBoundingClientRect();
      const toolbarRect = toolbar.getBoundingClientRect();

      // 현재 화면에 보이는지 여부를 계산
      const isVisible = (
        contentRect.top < window.innerHeight &&
        contentRect.bottom > 0 &&
        toolbarRect.top < window.innerHeight &&
        toolbarRect.bottom > 0
      );

      // 화면에 보이면 visible, 아니면 hidden으로 설정
      contentContainer.style.visibility = isVisible ? 'visible' : 'hidden';
      toolbar.style.visibility = isVisible ? 'visible' : 'hidden';
    }
    function openModal() {
        var overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';
        overlay.style.height = '100%'; // 모달의 height를 변경하여 위로 슬라이드
        document.body.style.overflowY = 'hidden'; // 열릴 때 스크롤 숨김
        var newPopupBackground = document.getElementById("newPopupBackground");
        newPopupBackground.style.display = "block";
      }
      
      function closeModal() {
        var overlay = document.getElementById('overlay');
        overlay.style.height = '0'; // 모달의 height를 변경하여 아래로 슬라이드
        setTimeout(function() {
          overlay.style.display = 'none';
          document.body.style.overflowY = 'auto'; // 닫힐 때 스크롤 허용
        }, 500); // 모달이 완전히 닫힌 후에 display를 none으로 변경
        var newPopupBackground = document.getElementById("newPopupBackground");
        newPopupBackground.style.display = "none";
      }

      function openModal3() {
        var overlay3 = document.getElementById('overlay3');
        overlay3.style.display = 'flex';
        overlay3.style.height = '100%'; // 모달의 height를 변경하여 위로 슬라이드
        document.body.style.overflowY = 'hidden'; // 열릴 때 스크롤 숨김
        var newPopupBackground3 = document.getElementById("newPopupBackground3");
        newPopupBackground3.style.display = "block";
      }
      
      function closeModal3() {
        var overlay3 = document.getElementById('overlay3');
        overlay3.style.height = '0'; // 모달의 height를 변경하여 아래로 슬라이드
        setTimeout(function() {
          overlay3.style.display = 'none';
          document.body.style.overflowY = 'auto'; // 닫힐 때 스크롤 허용
        }, 500); // 모달이 완전히 닫힌 후에 display를 none으로 변경
        var newPopupBackground3 = document.getElementById("newPopupBackground3");
        newPopupBackground3.style.display = "none";
        
      }
// JavaScript 코드를 작성합니다.
let inputElement = document.getElementById('textInput');
let outputElement = document.getElementById('output');
let textArray = [];

function handleKeyPress(event) {
// 엔터 키를 눌렀을 때만 처리
if (event.key === 'Enter') {
  saveText();
}
}

function saveText() {
let text = inputElement.value;

// 입력된 텍스트를 배열에 저장
textArray.push(text);

// 배열에 저장된 텍스트를 화면에 표시
displayText();

// 입력 박스 비우기
inputElement.value = '';
}
function displayText() {
// 배열에 저장된 텍스트를 화면에 표시
outputElement.innerHTML = '<h3></h3>';
outputElement.innerHTML += '<ul>';
textArray.forEach(function (text) {
  outputElement.innerHTML += '<li class="list">' + text + '<img src="img/x.png" alt="x" class="list-remove"></li>';
});
outputElement.innerHTML += '</ul>';
}


function toggleKeyboard() {
var keyboardImage = document.getElementById('keyboardImage');
var modal = document.querySelector('.modal3');
var keyboardIcon = document.getElementById('modal-header3-contents-icon');


keyboardIcon.style.display = 'none';
if (keyboardImage.style.display === 'none') {
// 키보드 이미지가 숨겨져 있다면 보이도록 설정하고, 모달 높이를 조절합니다.
keyboardImage.style.display = 'block';
modal.style.height = (modal.offsetHeight + 300) + 'px';

} else {
// 키보드 이미지가 보이고 있다면 숨기도록 설정하고, 모달 높이를 조절합니다.
keyboardImage.style.display = 'none';
modal.style.height = (modal.offsetHeight - 300) + 'px';
}
}



      // JavaScript 코드를 작성합니다.


function openModal5() {
  var overlay5 = document.getElementById('overlay5');
  overlay5.style.display = 'flex';
  overlay5.style.height = '100%'; // 모달의 height를 변경하여 위로 슬라이드
  document.body.style.overflowY = 'hidden'; // 열릴 때 스크롤 숨김
  var newPopupBackground5 = document.getElementById("newPopupBackground5");
  newPopupBackground5.style.display = "block";
}

function closeModal5() {
  var overlay5 = document.getElementById('overlay5');
  overlay5.style.height = '0'; // 모달의 height를 변경하여 아래로 슬라이드
  setTimeout(function() {
    overlay5.style.display = 'none';
    document.body.style.overflowY = 'auto'; // 닫힐 때 스크롤 허용
  }, 500); // 모달이 완전히 닫힌 후에 display를 none으로 변경
  var newPopupBackground5 = document.getElementById("newPopupBackground5");
  newPopupBackground5.style.display = "none";
  
}
let inputElement5 = document.getElementById('textInput5');
let outputElement5 = document.getElementById('output5');
let textArray5 = [];

function handleKeyPress(event) {
    // 엔터 키를 눌렀을 때만 처리
    if (event.key === 'Enter') {
        saveText();
    }
}

function saveText5() {
    let text5 = inputElement5.value;

    // 입력된 텍스트를 배열에 저장
    textArray5.push(text);

    // 배열에 저장된 텍스트를 화면에 표시
    displayText5();

    // 입력 박스 비우기
    inputElement5.value = '';
}
function displayText5() {
    // 배열에 저장된 텍스트를 화면에 표시
    outputElement5.innerHTML = '<h3></h3>';
    outputElement5.innerHTML += '<ul>';
    textArray5.forEach(function (text) {
        outputElement5.innerHTML += '<li class="list">' + text + '<img src="img/x.png" alt="x" class="list-remove"></li>';
    });
    outputElement5.innerHTML += '</ul>';
}


function toggleKeyboard5() {
  var keyboardImage5 = document.getElementById('keyboardImage5');
  var modal5 = document.querySelector('.modal5');
  var keyboardIcon5 = document.getElementById('modal-header5-contents-icon');


  keyboardIcon5.style.display = 'none';
  // 키보드 이미지가 현재 보이는지 여부에 따라 작업을 수행합니다.
  if (keyboardImage5.style.display === 'none') {
      // 키보드 이미지가 숨겨져 있다면 보이도록 설정하고, 모달 높이를 조절합니다.
      keyboardImage5.style.display = 'block';
      modal5.style.height = (modal5.offsetHeight + 288) + 'px';
  } else {
      // 키보드 이미지가 보이고 있다면 숨기도록 설정하고, 모달 높이를 조절합니다.
      keyboardImage5.style.display = 'none';
      modal5.style.height = (modal5.offsetHeight - 288) + 'px';
  }
}


function openModal4() {
  var overlay4 = document.getElementById('overlay4');
  overlay4.style.display = 'flex';
  overlay4.style.height = '100%'; // 모달의 height를 변경하여 위로 슬라이드
  document.body.style.overflowY = 'hidden'; // 열릴 때 스크롤 숨김
  var newPopupBackground4 = document.getElementById("newPopupBackground4");
  newPopupBackground4.style.display = "block";
}

function closeModal4() {
  var overlay4 = document.getElementById('overlay4');
  overlay4.style.height = '0'; // 모달의 height를 변경하여 아래로 슬라이드
  setTimeout(function() {
    overlay4.style.display = 'none';
    document.body.style.overflowY = 'auto'; // 닫힐 때 스크롤 허용
  }, 500); // 모달이 완전히 닫힌 후에 display를 none으로 변경
  var newPopupBackground4 = document.getElementById("newPopupBackground4");
  newPopupBackground4.style.display = "none";
  
}

let inputElementH = document.getElementById('textInput-h');
let outputElementH = document.getElementById('output-h');
let textArrayH = [];

function handleKeyPressH(eventH) {
    // 엔터 키를 눌렀을 때만 처리
    if (eventH.key === 'Enter') {
        saveTextH();
    }
}

// 저장 함수
function saveTextH() {
    let text = inputElementH.value;

    // 입력된 텍스트를 배열에 저장
    textArrayH.push(text);

    // 배열에 저장된 텍스트를 화면에 표시
    displayTextH();

    // 입력 박스 비우기
    inputElementH.value = '';
}

// 텍스트 표시 함수
function displayTextH() {
    // 출력 엘리먼트를 초기화합니다.
    outputElementH.innerHTML = '';

    // 헤딩 엘리먼트를 생성합니다.
    let headingElement = document.createElement('h3');
    outputElementH.appendChild(headingElement);

    // 리스트 엘리먼트를 생성합니다.
    let listElement = document.createElement('ul');
    listElement.classList.add('ul2');
    outputElementH.appendChild(listElement);

    // 각 텍스트를 리스트 아이템으로 표시합니다.
    textArrayH.forEach(function (text) {
        // 메인 리스트 아이템 컨테이너를 생성합니다.
        let listItem = document.createElement('li');
        listItem.classList.add('li2');

        // span, text, 그리고 img를 포함할 컨테이너를 생성합니다.
        let containerElement = document.createElement('div');
        containerElement.classList.add('li2-container');

        // span 엘리먼트를 생성합니다.
        let spanElement = document.createElement('span');
        spanElement.innerText = '#';

        // text 노드를 생성합니다.
        let textNode = document.createTextNode(text);

        // img 엘리먼트를 생성합니다.
        let imgElement = document.createElement('img');
        imgElement.src = 'img/remove-hashtag.png';
        imgElement.alt = '';
        imgElement.classList.add('remove-hashtag');

        // 각 엘리먼트를 부모에 추가합니다.
        containerElement.appendChild(spanElement);
        containerElement.appendChild(textNode);
        containerElement.appendChild(imgElement);
        
        listItem.appendChild(containerElement);

        // 텍스트 길이를 기반으로 동적으로 너비를 계산하고 설정합니다.
        let calculatedWidth = 53 + getTextWidth(text) + 'px';
        listItem.style.minWidth = calculatedWidth;

        listElement.appendChild(listItem);
    });
}

// Function to calculate the text width using canvas
function getTextWidth(text) {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    context.font = window.getComputedStyle(outputElementH).font; // Use the computed font style
    let textMetrics = context.measureText(text);
    return textMetrics.width;
}

inputElementH.addEventListener('keydown', handleKeyPressH);


function openSecondPopup() {
  var popupBackground = document.getElementById("popupBackground");
  var secondPopup = document.getElementById("secondPopup");
  var newPopupBackground = document.getElementById("newPopupBackground");
  var newSecondPopup = document.getElementById("newSecondPopup");

  popupBackground.style.display = "block";
  secondPopup.style.display = "block";

  // 5초 후에 첫 번째 팝업을 자동으로 닫고 두 번째 팝업을 열기
  setTimeout(function () {
      closeSecondPopup(); // 첫 번째 팝업을 닫음
      
      newSecondPopup.style.display = "block";
  }, 1500);
}

function closeSecondPopup() {
  var popupBackground = document.getElementById("popupBackground");
  var secondPopup = document.getElementById("secondPopup");
  var newPopupBackground = document.getElementById("newPopupBackground");
  popupBackground.style.display = "none";
  secondPopup.style.display = "none";
  newPopupBackground.style.display="none";
}
