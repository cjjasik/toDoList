export default function ToDoItem ({item}) {

    return <>
            <input id={item.title} type="checkbox"/>
            <label for={item.title}>{item.title}</label>
            <br></br>
        </>
}