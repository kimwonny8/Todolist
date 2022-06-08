const datetext = document.getElementById('datetext')
const dateplus = document.getElementById('dateplus')
const todotext = document.getElementById('todotext')
const todoplus = document.getElementById('todoplus')
const ul = document.querySelector('.list')

const TODOS_KEY = "todos"
let toDos =[]

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//추가하는 내용받아서 보여주기
function paintToDo(newDoing){
  const li = document.createElement('li')
  li.id = newDoing.id
  li.innerText = newDoing.text
  ul.appendChild(li)
  li.style.fontSize = '25px'
  li.style.paddingTop = '20px'
  li.style.paddingLeft = '30px'
  li.style.listStyle = 'none'
  
  // 삭제하기
  const deletebt = document.createElement('button')
  deletebt.setAttribute('class', 'far fa-trash-alt')
  deletebt.style.paddingLeft = '15px'
  deletebt.style.backgroundColor = '#d1d1d5'
  deletebt.style.border = 'none'
  li.appendChild(deletebt)

  deletebt.addEventListener('click', () => {
    li.parentNode.removeChild(li)
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  })
 
}

//추가하는 내용을 로컬에 저장
function listadd() {
  const newTodo = todotext.value
  todotext.value = ''
  const newTodoObj = { text: newTodo, id: Date.now()}
  toDos.push(newTodoObj)
  paintToDo(newTodoObj)
  saveToDos()

}

function dateadd(){
  if (datetext.value !== '' && datetext.value !== '저장완료!') {
    localStorage.setItem('date', datetext.value)
    datetext.value = '저장완료!'
}
}

function enterkeyList() {
  if (window.event.keyCode == 13) {
    if (todotext.value !== '') {
      listadd()
    }
  }
}
function enterkeyDate() {
  if (window.event.keyCode == 13) {
    dateadd()
  }
}

dateplus.addEventListener('click', () => {
  dateadd()
})

if(localStorage.getItem('date')!==''){
  if(localStorage.getItem('date')!==null){
  datetext.placeholder=localStorage.getItem('date')}
}

todoplus.addEventListener('click', () => {
  if (todotext.value !== '') {
    listadd()
  }
})

// 화면 돌아와서도 내용 뜨게하기
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);   
}