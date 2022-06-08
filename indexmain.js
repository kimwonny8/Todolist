const today = document.getElementById('today')
const date = document.createElement('p')
const show = document.querySelector('ul')

const happy = document.querySelector('#happy')
const smile = document.querySelector('#smile')
const soso = document.querySelector('#soso')
const sad = document.querySelector('#sad')
const angry = document.querySelector('#angry')


date.textContent = localStorage.getItem('date')
today.appendChild(date)

const output =localStorage.getItem('todos')
const arr=JSON.parse(output)


for(let i=0; i<arr.length; i++){
    const showList = document.createElement('li')
    show.appendChild(showList)
    showList.textContent = arr[i].text
    showList.style.fontSize = '23px'
    showList.style.padding = '15px'
    

    const checkbox = document.createElement('input')
    checkbox.type='checkbox'
    showList.appendChild(checkbox)
    checkbox.addEventListener('change',()=>{
        if(checkbox.checked){
            showList.style.textDecoration = 'line-through'
            showList.style.color= 'gray'
        } else {
            showList.style.textDecoration = ''
            showList.style.color='black'
        }
        })
    }


const faceState = localStorage.getItem('face')
    if(faceState ==='happy'){
        happy.style.color='orange'
    }
    else if(faceState ==='smile'){
        smile.style.color='orange'
    }
    else if(faceState ==='soso'){
     soso.style.color='orange'
    }
    else if(faceState ==='sad'){
        sad.style.color='orange'
    }

    else if(faceState ==='angry'){
        angry.style.color='orange'
    }

    

smile.addEventListener('click',()=>{
    localStorage.setItem('face','smile')
    smile.style.color='orange'
    happy.style.color='black'
    soso.style.color='black'
    sad.style.color='black'
    angry.style.color='black'
 })
 happy.addEventListener('click',()=>{
    localStorage.setItem('face','happy')
    happy.style.color='orange'
    smile.style.color='black'
    soso.style.color='black'
    sad.style.color='black'
    angry.style.color='black'
 })
 soso.addEventListener('click',()=>{
    localStorage.setItem('face','soso')
    soso.style.color='orange'
    happy.style.color='black'
    smile.style.color='black'
    sad.style.color='black'
    angry.style.color='black'
 })
 sad.addEventListener('click',()=>{
    localStorage.setItem('face','sad')
    sad.style.color='orange'
    happy.style.color='black'
    smile.style.color='black'
    soso.style.color='black'
    angry.style.color='black'
    
 })
 angry.addEventListener('click',()=>{
    localStorage.setItem('face','angry')
    angry.style.color='orange'
    happy.style.color='black'
    smile.style.color='black'
    sad.style.color='black'
    soso.style.color='black'
 })

