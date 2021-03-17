const canvas = document.querySelector('.canvas')
const circle1 = document.querySelector('.circle-1')
const circle3 = document.querySelector('.circle-3')
const circle5 = document.querySelector('.circle-5')
const circle7 = document.querySelector('.circle-7')
const circle9 = document.querySelector('.circle-9')
const circle2 = document.querySelector('.circle-2')
const circle4 = document.querySelector('.circle-4')
const circle6 = document.querySelector('.circle-6')
const circle8 = document.querySelector('.circle-8')

let canvasWidth = Number(window.getComputedStyle(canvas).width.split('px')[0])
let canvasHeight = Number(window.getComputedStyle(canvas).height.split('px')[0])

let circle1Size = Number(window.getComputedStyle(circle1).width.split('px')[0])
let circle1X = circle1Size / 2 * (-1)
let circle1TopY = canvasHeight + circle1X
let circle1RightY = canvasWidth + circle1X

let circle2Size = Number(window.getComputedStyle(circle2).width.split('px')[0])
let circle2X = circle2Size / 2 * (-1)
let circle2TopY = canvasHeight + circle2X
let circle2RightY = canvasWidth + circle2X

let circle3Size = Number(window.getComputedStyle(circle3).width.split('px')[0])
let circle3X = circle3Size / 2 * (-1)
let circle3TopY = canvasHeight + circle3X
let circle3RightY = canvasWidth + circle3X

let circle4Size = Number(window.getComputedStyle(circle4).width.split('px')[0])
let circle4X = circle4Size / 2 * (-1)
let circle4TopY = canvasHeight + circle4X
let circle4RightY = canvasWidth + circle4X

let circle5Size = Number(window.getComputedStyle(circle5).width.split('px')[0])
let circle5X = circle5Size / 2 * (-1)
let circle5TopY = canvasHeight + circle5X
let circle5RightY = canvasWidth + circle5X

let circle6Size = Number(window.getComputedStyle(circle6).width.split('px')[0])
let circle6X = circle6Size / 2 * (-1)
let circle6TopY = canvasHeight + circle6X
let circle6RightY = canvasWidth + circle6X

let circle7Size = Number(window.getComputedStyle(circle7).width.split('px')[0])
let circle7X = circle7Size / 2 * (-1)
let circle7TopY = canvasHeight + circle7X
let circle7RightY = canvasWidth + circle7X

let circle8Size = Number(window.getComputedStyle(circle8).width.split('px')[0])
let circle8X = circle8Size / 2 * (-1)
let circle8TopY = canvasHeight + circle8X
let circle8RightY = canvasWidth + circle8X

let circle9Size = Number(window.getComputedStyle(circle9).width.split('px')[0])
let circle9X = circle9Size / 2 * (-1)
let circle9TopY = canvasHeight + circle9X
let circle9RightY = canvasWidth + circle9X


console.log(circle1X)



function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

circle1.style.top = `${getRandomInt(circle1X, circle1TopY) * (1)}px`
circle1.style.right = `${getRandomInt(circle1X, circle1RightY) * (1)}px`
circle2.style.top = `${getRandomInt(circle2X, circle2TopY) * (1)}px`
circle2.style.right = `${getRandomInt(circle2X, circle2RightY) * (1)}px`
circle3.style.top = `${getRandomInt(circle3X, circle3TopY) * (1)}px`
circle3.style.right = `${getRandomInt(circle3X, circle3RightY) * (1)}px`
circle4.style.top = `${getRandomInt(circle4X, circle4TopY) * (1)}px`
circle4.style.right = `${getRandomInt(circle4X, circle4RightY) * (1)}px`
circle5.style.top = `${getRandomInt(circle5X, circle5TopY) * (1)}px`
circle5.style.right = `${getRandomInt(circle5X, circle5RightY) * (1)}px`
circle6.style.top = `${getRandomInt(circle6X, circle6TopY) * (1)}px`
circle6.style.right = `${getRandomInt(circle6X, circle6RightY) * (1)}px`
circle7.style.top = `${getRandomInt(circle7X, circle7TopY) * (1)}px`
circle7.style.right = `${getRandomInt(circle7X, circle7RightY) * (1)}px`
circle8.style.top = `${getRandomInt(circle8X, circle8TopY) * (1)}px`
circle8.style.right = `${getRandomInt(circle8X, circle8RightY) * (1)}px`
circle9.style.top = `${getRandomInt(circle9X, circle9TopY) * (1)}px`
circle9.style.right = `${getRandomInt(circle9X, circle9RightY) * (1)}px`


circle1.addEventListener('click', function () {
  circle1.style.top = `${getRandomInt(circle1X, circle1TopY) * (1)}px`
circle1.style.right = `${getRandomInt(circle1X, circle1RightY) * (1)}px`
  circle1.style.transition = `${getRandomInt(3, 8) * 0.1}s`
  circle1.style.transform = `scale(${getRandomInt(5, 12) * (0.1)})`
})
circle2.addEventListener('click', function () {
  circle2.style.top = `${getRandomInt(circle2X, circle2TopY) * (1)}px`
  circle2.style.right = `${getRandomInt(circle2X, circle2RightY) * (1)}px`
  circle2.style.transition = `${getRandomInt(3, 8) * 0.1}s`
  circle2.style.transform = `scale(${getRandomInt(5, 12) * (0.1)})`
})
circle3.addEventListener('click', function () {
  circle3.style.top = `${getRandomInt(circle3X, circle3TopY) * (1)}px`
  circle3.style.right = `${getRandomInt(circle3X, circle3RightY) * (1)}px`
  circle3.style.transition = `${getRandomInt(3, 8) * 0.1}s`
  circle3.style.transform = `scale(${getRandomInt(5, 12) * (0.1)})`
})
circle4.addEventListener('click', function () {
  circle4.style.top = `${getRandomInt(circle4X, circle4TopY) * (1)}px`
  circle4.style.right = `${getRandomInt(circle4X, circle4RightY) * (1)}px`
  circle4.style.transition = `${getRandomInt(3, 8) * 0.1}s`
  circle4.style.transform = `scale(${getRandomInt(5, 12) * (0.1)})`
})
circle5.addEventListener('click', function () {
  circle5.style.top = `${getRandomInt(circle5X, circle5TopY) * (1)}px`
  circle5.style.right = `${getRandomInt(circle5X, circle5RightY) * (1)}px`
  circle5.style.transition = `${getRandomInt(3, 8) * 0.1}s`
  circle5.style.transform = `scale(${getRandomInt(5, 12) * (0.1)})`
})
circle6.addEventListener('click', function () {
  circle6.style.top = `${getRandomInt(circle6X, circle6TopY) * (1)}px`
  circle6.style.right = `${getRandomInt(circle6X, circle6RightY) * (1)}px`
  circle6.style.transition = `${getRandomInt(3, 8) * 0.1}s`
  circle6.style.transform = `scale(${getRandomInt(5, 12) * (0.1)})`
})
circle7.addEventListener('click', function () {
  circle7.style.top = `${getRandomInt(circle7X, circle7TopY) * (1)}px`
  circle7.style.right = `${getRandomInt(circle7X, circle7RightY) * (1)}px`
  circle7.style.transition = `${getRandomInt(3, 8) * 0.1}s`
  circle7.style.transform = `scale(${getRandomInt(5, 12) * (0.1)})`
})
circle8.addEventListener('click', function () {
  circle8.style.top = `${getRandomInt(circle8X, circle8TopY) * (1)}px`
  circle8.style.right = `${getRandomInt(circle8X, circle8RightY) * (1)}px`
  circle8.style.transition = `${getRandomInt(3, 8) * 0.1}s`
  circle8.style.transform = `scale(${getRandomInt(5, 12) * (0.1)})`
})
circle9.addEventListener('click', function () {
  circle9.style.top = `${getRandomInt(circle9X, circle9TopY) * (1)}px`
  circle9.style.right = `${getRandomInt(circle9X, circle9RightY) * (1)}px`
  circle9.style.transition = `${getRandomInt(3, 8) * 0.1}s`
  circle9.style.transform = `scale(${getRandomInt(5, 12) * (0.1)})`
})