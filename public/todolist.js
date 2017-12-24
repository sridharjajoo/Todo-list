$(function(){

    let newTodoInput=$('#newTodo')
    let addTodo=$('#addTodo')
    let todoList=$('#todoList')
    let deleteItem=$('#deleteItem')

    addTodo.click(function(){
        let newTodo=newTodoInput.val();
        // console.log(newTodo);
        $.post(
            '/todos',
            {task: newTodo},
            function(data){
                todoList.empty()
                for (todo of data){
                    todoList.append("<li>" + todo.task + "</li>")
                }
            }
        )
    })

    deleteItem.click(function(){
        
    })
})

console.log("Something hapened!");