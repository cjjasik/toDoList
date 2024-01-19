import ToDoItem from "./ToDoItem"

export default function ToDoList ({toDoItems}) {

    return <>
        <div className="items">
            {toDoItems.map((item) => <ToDoItem item={item}/>)}
        </div>
        </>

}