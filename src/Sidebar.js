const Sidebar = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
    hideSidebar
  }) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
    if(!hideSidebar){
      return (
        <div className="app-sidebar">
          <div className="app-sidebar-header">
            <h1 className="sidebar-title">Notes</h1>
            <button onClick={onAddNote}className="sidebar">+</button>
          </div>
          <div className="app-sidebar-notes">
            {sortedNotes.map(({ id, title, body, lastModified }, i) => (
              <div
                className={`app-sidebar-note ${id === activeNote && "active"}`}
                onClick={() => setActiveNote(id)}
              >
                <div className="sidebar-note-title">
                  <strong>{title}</strong>
                </div>
    
                <p>{body && body.substr(0, 100) + "..."}</p>
                <small className="note-meta">
                  {new Date(lastModified).toLocaleDateString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </small>
              </div>
            ))}
          </div>
        </div>
      );
    }
    else{
      return;
    }
  };
  
  export default Sidebar;