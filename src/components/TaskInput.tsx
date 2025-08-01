import { useState } from "react";

export default function TaskInput() {
  const [title, setTitle] = useState("");

  return (
    <div className="m-2 p-2">
      <form className="row">
        <div className="col-10">
          <input
            className="form-control"
            type="text"
            placeholder="Insert a task here.."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
