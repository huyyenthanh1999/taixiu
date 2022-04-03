const sliderContainer = document.querySelector('.sidebar')
const slide = document.querySelector('.sidebar-list')
const leftButton = document.querySelector('.prev')
const rightButton = document.querySelector('.next')
const slidesLength = slide.querySelectorAll('.sidebar-item').length
let activeSlideIndex = 0

slide.style.left = `-${(slidesLength - 1) * sliderContainer.clientWidth}px`
leftButton.addEventListener('click', () => changeSlide('left'))
rightButton.addEventListener('click', () => changeSlide('right'))

const changeSlide = (direction) => {
    const sliderWidth = sliderContainer.clientWidth
    if(direction === 'right') {
        console.log('right')
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'left') {
        console.log('left')
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slide.style.transform = `translateX(${activeSlideIndex * sliderWidth}px)`
}

// validate for phone number
var phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
var signupBtn = document.querySelector('.signup-btn');
var phoneInput = document.querySelector('input');
signupBtn.addEventListener('click', function(e) {
    if(phoneInput.value.match(phoneRegex)) {
        alert('Đăng ký thành công');
    } else {
        alert('Số điện thoại không hợp lệ');
    }
});
