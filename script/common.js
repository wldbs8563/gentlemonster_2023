//header, footer JS
//header 전체메뉴 스크립트 flow
//1.open-nav 초기 숨기기
//2. 햄버거메뉴 클릭 시 open-nav 출력
//3.open-nav 안 X버튼(nav_close) 클릭 시 open-nav 숨기기
const open_nav = document.querySelector('#open_nav')
const menu = document.querySelector('#menu')
const nav_close = document.querySelector('#nav_close')
console.log(open_nav, menu, nav_close)
open_nav.style.transform = 'translateX(100%)' //{transform:translateX()}
//css값 상태에 따라 변경이 일어날 경우 애니메이션 transition
menu.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(0)'
    open_nav.style.transition = 'transform 1s'
    //display = 'none'으로 숨긴 대상을 다시 보이게 할 경우
    //기존 디자인css에서 flex로 정렬한 대상이면 display:'flex'
    //기존 디자인css에서 flex 설정이 없었다면 display:'block'
})
nav_close.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(100%)' //닫기 버튼이 눌리지 않으면 중첩순서가 뒤에 있기 때문에 css에서 z-index를 높게 준다
})
/* swiper-slide open-nav 광고영역 */
const nav_adver = new Swiper('#nav_adver',{
    direction:'horizontal',
    autoplay:{delay:2000},
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
    });