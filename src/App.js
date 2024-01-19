import ToDoList from "./components/ToDoList";

export default function App () {
    
    let toDoItems = [
        {title:"laundry", isDone:true},
        {title:"dishes", isDone:false},
        {title:"vacuum", isDone:false}
    ]
    
    return (
        <>
            <div className="heading">
                <h1 className="title">Welcome to My To Do List!</h1>
                <h2 className="intro">To Do For Today:</h2> 
            </div>

            <div className="button-container">
                <button className="add-button">+</button>
            </div>
            
            <br></br>



            <ToDoList
                toDoItems={toDoItems}                
            />
        </>
    );
}