import {AiTwotoneDelete, AiOutlineCreditCard } from "react-icons/ai"
export default function Student(props) {
    const { student, DeleteList, toggle_edit, toggle_complete } = props;
    return (
        <div className="Student">
            <span 
            className={`${student.isComplete ? "complete" : ""}`}
            onClick={() => toggle_complete(student.id)}
            >
                {student.name}
            </span>
            <AiOutlineCreditCard onClick={() => toggle_edit(student.id)}/>
            <AiTwotoneDelete onClick={() => DeleteList(student.id)}/>
        </div>
    )
}