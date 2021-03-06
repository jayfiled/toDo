var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
          console.log('Your todo list is empty!');
        } else {
        console.log('My Todos: ');
          for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
            console.log('( x )', this.todos[i].todoText);
          } else {
            console.log('(   )', this.todos[i].todoText);
          }
        }
      }
    },
    addTodo: function(todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false
      });
      this.displayTodos();
    },
    changeTodo: function(position, todoText) {
      // this.todos[position] = newValue;
      this.todos[position].todoText = todoText;
      this.displayTodos();
    },
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
      this.displayTodos();
    },
    toggleCompleted: function(position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
    },
    toggleAll: function() {
      let totalTodos = this.todos.length;
      let completedTodos = 0;
      
      // Loop through each todo and count how many are completed
      for (let i = 0; i < totalTodos; i++) {
        if (this.todos[i].completed === true) {
          completedTodos++;
        }
      }
      // if everything is true, make everything false
      if (completedTodos === totalTodos) {
        for (let i = 0; i < totalTodos; i++) {
          this.todos[i].completed = false;
        }
      // Otherwise, make everything false
      } else {
        for (let i = 0; i < totalTodos; i++) {
            this.todos[i].completed = true;
        }
      }
      this.displayTodos();
    }
  };
  
  let handlers = {
    displayTodos: function() {
      todoList.displayTodos();
    },
    toggleAll: function() {
      todoList.toggleAll();
    },
    addTodo: function() {
      addTodoTextInput = document.getElementById('addTodoTextInput')
      todoList.addTodo(addTodoTextInput.value)
      addTodoTextInput.value = "";
    },
    changeTodo: function() {
      changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
      changeTodoTextInput = document.getElementById('changeTodoTextInput');
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoPositionInput.value = '';
      changeTodoTextInput.value = '';
    }
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  