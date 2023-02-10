const todoItem = (title, description = '', done = false, dueDate = null, priority = 'low', notes = [], checklist = []) => {
  const setTitle = (titleArg) => {
    obj.title = titleArg;
  };

  const setDescription = (desc) => {
    obj.description = desc;
  };

  const setDueDate = (date) => {
    obj.dueDate = date;
  };

  const setDone = () => {
    obj.done = !obj.done;
  };

  const setPriority = (priorityArg) => {
    obj.priority = priorityArg;
  };

  const addNotes = (note) => {
    obj.notes.push(note);
  };

  const removeNote = (index) => {
    obj.notes = obj.notes.splice(index, 1);
  };

  const addChecklistItem = (item) => {
    obj.checklist.push(item);
  };

  const removeChecklistItem = (index) => {
    obj.checklist = obj.checklist.splice(index, 1);
  };

  const obj = {
    title,
    description,
    done,
    dueDate,
    priority,
    notes,
    checklist,
    setTitle,
    setDescription,
    setDone,
    setDueDate,
    setPriority,
    addNotes,
    removeNote,
    addChecklistItem,
    removeChecklistItem,
  };
  return obj;
};

export default todoItem;
