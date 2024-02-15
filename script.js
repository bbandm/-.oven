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
  
  var button = document.getElementById('like-dislike');

button.addEventListener('click', function(event) {
    var rect = button.getBoundingClientRect();
    var clickX = event.clientX - rect.left;

    if (clickX < rect.width / 2) {
        // 왼쪽 부분 클릭
        console.log('왼쪽 부분 클릭');
        // 여기에 왼쪽 부분 클릭 시 수행할 동작 추가
    } else {
        // 오른쪽 부분 클릭
        console.log('오른쪽 부분 클릭');
        // 여기에 오른쪽 부분 클릭 시 수행할 동작 추가
    }
});

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
      }
      
      function closeModal() {
        var overlay = document.getElementById('overlay');
        overlay.style.height = '0'; // 모달의 height를 변경하여 아래로 슬라이드
        setTimeout(function() {
          overlay.style.display = 'none';
          document.body.style.overflowY = 'auto'; // 닫힐 때 스크롤 허용
        }, 500); // 모달이 완전히 닫힌 후에 display를 none으로 변경
      }

// script.js 파일에 다음 함수를 추가합니다.

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
      newPopupBackground.style.display = "block";
      newSecondPopup.style.display = "block";
  }, 1500);
}

function closeSecondPopup() {
  var popupBackground = document.getElementById("popupBackground");
  var secondPopup = document.getElementById("secondPopup");

  popupBackground.style.display = "none";
  secondPopup.style.display = "none";
}

function closeNewSecondPopup() {
  var newPopupBackground = document.getElementById("newPopupBackground");
  var newSecondPopup = document.getElementById("newSecondPopup");

  newPopupBackground.style.display = "none";
  newSecondPopup.style.display = "none";
}



