//alert('Hello!');
const todoList = {
    items: [
      {
        text: 'Сделать ДЗ',
        completed: false,
      },
      {
        text: 'Узнать больше про модули',
        completed: false,
      },
      {
        text: 'Помочь одногруппнику понять тему',
        completed: false,
      },
      {
        text: 'Сходить за продуктами',
        completed: true,
      },
    ],

    printAll: function printAll() {
      for (let i = 0; i < this.items.length; i++ ) {
      console.log(this.items[i].text);
    };
    },

    add: function add(doIt) {
    this.items.unshift(this.items);
    this.items[0].text = doIt;
    this.items[0].completed = false;
    },
  
    remove: function(index) {
    this.items.splice(index, 1);
    },
  
  //   print: function(index) {},
  
  //   complete: function(index) {},

  
}
todoList.add('Save the World !');  // проверка
todoList.remove(3) ;
todoList.printAll();