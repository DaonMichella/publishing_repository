//생성용 레이어 
function nlayerAlert(title, ment, btn, tg) {
	var body = document.querySelector('body');

	var btnTx = btn == null ? '확인' : btn;
	var layerCnt = '<div class="layer-pop alert" id="nAlert">';
		layerCnt += '<div class="layer-cnt">';
		
		if(title != '') {
			layerCnt += '<div class="layer-top">';
			layerCnt += '<h2 class="layer-title">'+ title +'</h2>';
			layerCnt += '</div>';
		} 
		
		layerCnt += '<div class="layer-mid">';
		layerCnt += '<p class="alert-msg">'+ment+'</p>';
		layerCnt += '<div class="btn-group">';
		layerCnt += '<button type="button" class="btn-round close-layer"><span>'+btnTx+'</span></button>';
		layerCnt += '</div>';
		layerCnt += '</div>';
		layerCnt += '<button type="button" class="btn-close close-layer">팝업 닫기</button>';
		layerCnt += '</div>';
		layerCnt += '</div>';

	body.insertAdjacentHTML('beforeend', layerCnt);
	var alert = document.querySelector('#nAlert'),
		close = alert.querySelector('#nAlert .close-layer');

	nlayer.showFunc('nAlert');
	close.focus();

	close.addEventListener('click', function(){
		alert.parentNode.removeChild(alert);
		if(tg != null) tg.focus();
	});
}

// 생성용 레이어 
function nlayerConfirm(active, title, ment, btn1, btn2) {
	var body = document.querySelector('body');

	var btnCancel = btn1 == null ? '취소' : btn1,
		btnOk = btn2 == null ? '확인' : btn2;

	var layerCnt = '<div class="layer-pop confirm" id="nConfirm">';
		layerCnt += '<div class="layer-cnt">';
		if(title != '') {
			layerCnt += '<div class="layer-top">';
			layerCnt += '<h2 class="layer-title">'+ title +'</h2>';
			layerCnt += '</div>';
		}
		layerCnt += '<div class="layer-mid">';
		layerCnt += '<p class="confirm-msg">'+ment+'</p>';
		layerCnt += '<div class="btn-group">';
		layerCnt += '<span><button type="button" class="btn-round close-layer"><span>'+ btnCancel +'</span></button></span>';
		layerCnt += '<span><button type="button" class="btn-round close-layer btn-ok"><span>'+ btnOk +'</span></button></span>';
		layerCnt += '</div>';
		layerCnt += '</div>';
		layerCnt += '<button type="button" class="btn-close close-layer">팝업 닫기</button>';
		layerCnt += '</div>';
		layerCnt += '</div>';

	body.insertAdjacentHTML('beforeend', layerCnt);
	var confirm  = document.querySelector('#nConfirm'),
		cancel = confirm.querySelector('#nConfirm .close-layer'),
		ok 	   = confirm.querySelector('#nConfirm .btn-ok');

	nlayer.showFunc('nConfirm');

	cancel.addEventListener('click', function(){
		confirm.parentNode.removeChild(confirm);
	});
	ok.addEventListener('click', function(){
		confirm.parentNode.removeChild(confirm);
		if(typeof active === 'function') {
			active();
		}
	});
}

/*
  // 알럿 팝업 script 2021-10-13
  var alertBtn = document.querySelector('.open-alert');
  alertBtn.addEventListener('click', function(){
      nlayerAlert('', '조건명을 선택해 주세요.', '확인');
  });

  //컨펌 팝업 (미사용 디자인 미확정)
  var alertBtn = document.querySelector('.open-confirm');
  
  var confirmRun = function(){
      console.log('컨펌 확인 버튼 클릭 시 시 실행될 함수입니다.');
  }
  alertBtn.addEventListener('click', function(){
      nlayerConfirm(confirmRun, '', '컨펌 문구 영역 입니다.', '취소', '확인');
  });
*/
