// time
function startTime(){
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let m = "AM";
    month = checkTime(month);
    date = checkTime(date);
    minute = checkTime(minute);

    if(hour > 12) {
        hour = hour - 12;
        m = "PM";
    }else {
        m = "AM";
    }
    hour = checkTime(hour);

    document.getElementById('header_time').innerHTML = year + "/" + month + "/" + date + " " + hour + ":" + minute + " " + m + " (GMT+8)";
    let timeoutId = setTimeout(startTime, 1000);
}

function checkTime(i){
    if(i < 10) {
        i = "0" + i;
    }
    return i;
}

startTime();

var swiperBrand = new Swiper(".footer_brand_swiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    speed: 1000,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
})

$(".btn-back").click(function(){
    history.back();
})