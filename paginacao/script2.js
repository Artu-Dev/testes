const itens = Array.from({length: 100})
  .map((_,i) => `Item ${i+1}`);

const listContainer = document.querySelector('#paginate .list');
const buttons = {
  first: document.querySelector('.first'),
  last: document.querySelector('.last'),
  next: document.querySelector('.next'),
  prev: document.querySelector('.prev')
}

const itensPerPage = 3;
const state = {
  page: 1,
  itensPerPage,
  totalPage: Math.ceil(itens.length / itensPerPage),
  maxNumbers: 5,
}

const controls = {
  next() {
    if(state.page < state.totalPage) {
      state.page++;
    }
    update();
    return;
  },
  prev() {
    if(state.page > 1) {
      state.page--;
    }
    update();
    return;
  },
  goTo(page) {
    if(page < 1){
      page.page = 1;
      return;
    }
    if (page > state.totalPage) {
      state.page = state.totalPage;
      return;
    }
    state.page = page;
    update();
  },
  addEvents() {
    buttons.first.addEventListener('click', () => this.goTo(1));
    buttons.last.addEventListener('click', () => this.goTo(state.totalPage));
    buttons.next.addEventListener('click', () => this.next());
    buttons.prev.addEventListener('click', () => this.prev());
  }
} 

const list = {
  create(item){
    const div = document.createElement('div')
    div.innerText = itens[item]
    div.classList.add('item');
    listContainer.appendChild(div)
  },
  update(){
    listContainer.innerHTML = "";

    for(let i = 0; i < itensPerPage; i++){
      const item = i+state.page*itensPerPage-itensPerPage;
      if(item < itens.length){
        list.create(item)
      }
    }
  }
  

}

const numbersContainer = document.querySelector('.numbers');

const numbers = {
  create(item) {
    const div = document.createElement('div');
    div.innerText = item;
    div.addEventListener('click',() => controls.goTo(item) )

    if(item === state.page) {
      div.classList.add('active')
    }
    
    numbersContainer.appendChild(div)

  },
  update() {
    numbersContainer.innerHTML = ""
    const { maxLeft, maxRight } = numbers.calculateMaxVisible();
    for(let page = maxLeft; page <= maxRight; page++){
      numbers.create(page)
    }
  },
  calculateMaxVisible() {
    const { maxNumbers } = state;
    let maxLeft = (state.page - Math.floor(maxNumbers / 2));
    let maxRight = (state.page + Math.floor(maxNumbers / 2));

    if(maxLeft < 1) {
      maxLeft = 1;
      maxRight = maxNumbers;
    }

    if(maxRight > state.totalPage) {
      maxLeft = state.totalPage - (maxNumbers -1);
      maxRight = state.totalPage;
      if(maxLeft < 1) maxLeft = 1
    }

    return {maxLeft, maxRight}
  }
}

function update() {
  list.update()
  numbers.update()
  
  console.log("update page:"+state.page)
}

function init() {
  controls.addEvents();
  update()
}

init()