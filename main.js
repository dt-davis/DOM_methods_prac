let body = document.querySelector('body')
let main = document.createElement('main')
let button = document.createElement('button')
button.append('remove')
let img = document.createElement('img')
img.src = 'https://i.imgur.com/Dm551pP.png'
let a = document.createElement('a')
a.href = 'https://www.codewars.com/users/dt-davis'
a.append('link to greatness')
body.append(button)
body.append(main)
let mainDOM = document.querySelector('main')
mainDOM.append(img)
mainDOM.append(a)
button.addEventListener('click', function(){
    main.remove()
})
