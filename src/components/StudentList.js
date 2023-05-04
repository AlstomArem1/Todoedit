import Student from "./Student";
import {useState} from "react";
import FormAdd from "./FormAdd";
import FormEdit from "./FormEdit";
import uuid from "react-uuid";
export default function StudentList() {
    const [list, setList] = useState([
        {
            id: 1,
            name: "The Summer",
            isComplete: false,
            isEdit: false,
        },
        {
            id: 2,
            name: "The Fall",
            isComplete: false,
            isEdit: false,
        }
    ]);
    console.log(list);
    
    const addList = (textName) => {
        setList([...list,{id: uuid(), name: textName, isComplete: false}]);
    }
    const DeleteList = (id) => {
        const newList = list.filter((stu) => stu.id !== id); // Xoa chuoi het
        setList(newList);
    }
    ///+++++++++++++++++++++++++++++++
    const editList = (id,name) => {
        setList(
            list.map((value) => 
                value.id === id ? {...value, name, isEdit: false} : value
            )
        );
    };
    const toggle_edit = (id) => {
        setList(
            list.map((value) =>
            value.id === id ? {...value, isEdit: !value.isEdit } : value
            )
        );
    };
    const toggle_complete = (id) => {
        setList(
            list.map((value) =>
            value.id === id ? {...value, isComplete: !value.isComplete } : value
            )
        );
    };
    return (  
        <div className="StudentList">
            <FormAdd addList={addList} />
            {list.map((value,index) => 
           value.isEdit ? (
            <FormEdit value={value} editList={editList} key={index} /> 
           ):(
                <Student 
                student={value} 
                DeleteList={DeleteList} 
                key={index}
                toggle_edit={toggle_edit}
                toggle_complete={toggle_complete}
                />
            )
            )}
        </div>
    );
}