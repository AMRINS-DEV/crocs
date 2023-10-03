function outline() {
    const [...elms] = document.querySelectorAll('.outline')

    elms.forEach((el, ind, arr) => {
        el.addEventListener('click', function () {
            arr.forEach(item => {
                item.style.outline = 'none'
            })
            this.style.outline = '#4696ff94 solid'
        })
    })

} ; outline()

function toggleHeight() {
    const elms = document.querySelector('.acount')
    const btn = document.querySelector('.user-btn')
    let state = true
    btn.addEventListener('click', function () {
        if(state) {
            elms.style.display = 'flex'
            state = false
        } else {
            elms.style.display = 'none'
            state = true
        }
    })
} ; toggleHeight()

function toggleList() {
    const elm = document.querySelector('.hidden-list')
    const btn = document.querySelector('.side-list-button')
    let state = true

    btn.addEventListener('click', function () {
        if(state) {
            elm.style.height = '250px'
            state = false
        } else {
            elm.style.height = '0'
            state = true
        }
    })
} ; toggleList()


function slider2() {
    const PARENT = document.querySelector('.slider')
    const sliderItems = PARENT.children
    let arr = [...sliderItems]

    function elm(x, y) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove(x)
            arr[i].classList.add(x)

            PARENT.appendChild(arr[i])
        }
    }
    let autoSlider = setInterval(sliderAutoMove, 3000)

    function sliderAutoMove() {
        PARENT.innerHTML = ''
        let firstItem = arr[0]
        arr.shift()
        arr.push(firstItem)
        elm('slideFromRight')
    }
}
slider2()
