import ReactMarkdown from "react-markdown";

const Body = ({ activeNote, onUpdateNote, onDeleteNote, editNote, onEditNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;
  if (editNote === true){
    return (
      <div className="app-main">
        <div className="app-main-note-edit">
          <div className="app-sidebar-header">
              <input
              type="text"
              id="title"
              placeholder="Note Title"
              value={activeNote.title}
              onChange={(e) => onEditField("title", e.target.value)}
              autoFocus
              />
            <button className="body" onClick={() => onEditNote()}>Save</button>
            <button className="body" onClick={() => onDeleteNote(activeNote.id)}>Delete</button>
          </div>
          <textarea
            id="body"
            placeholder="Write your note here..."
            value={activeNote.body}
            onChange={(e) => onEditField("body", e.target.value)}
          />
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="app-main">
        <div className="app-main-note-edit">
          <div className="app-sidebar-header">
            <h1 className="preview-title">{activeNote.title}</h1>
            <button className="body" onClick={() => onEditNote()}>Edit</button>
            <button className="body" onClick={() => onDeleteNote(activeNote.id)}>Delete</button>
          </div>
          <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>
        </div>
      </div>
    );
  }
  
};

export default Body;