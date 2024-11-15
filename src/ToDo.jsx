import React, { useState } from 'react';

const ToDo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');
  const [updateText, setupdateText] = useState(null);

  const addTodos = (e) => {
    e.preventDefault();

    if(text ===''){
     return   alert('please first add your to do..')
    }

    if (updateText !== null) {
      const alltodos = [...todo];
      alltodos[updateText] = text;
      setTodo(alltodos);
      setupdateText(null);
      setText('');
    } else {
      setTodo([...todo, text]);
      setText('');
    }
  };

  const updateTodo = (id) => {
    setupdateText(id);
    setText(todo[id]);
  };

  const removeTodo = (id) => {
    setTodo(todo.filter((_, ind) => ind !== id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>To Do Application</h2>

      <form onSubmit={addTodos} style={styles.form}>
        <input
          type="text"
          placeholder="Enter your todos.."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          {updateText !== null ? 'Update Todo' : 'Add Todo'}
        </button>
      </form>

      <div style={styles.listContainer}>
        <span style={styles.listHeader}>List todos:</span>
        <ul style={styles.list}>
          {todo.map((list, index) => (
            <li key={index} style={styles.listItem}>
              {list}
              <button
                onClick={() => updateTodo(index)}
                style={{ ...styles.button, marginLeft: '10px' }}
              >
                Edit
              </button>
              <button
                onClick={() => removeTodo(index)}
                style={{ ...styles.button, marginLeft: '5px', backgroundColor: 'red' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Internal CSS styles
const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  input: {
    flex: '1',
    padding: '10px',
    marginRight: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  listContainer: {
    marginTop: '20px',
  },
  listHeader: {
    display: 'block',
    marginBottom: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#555',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export default ToDo;
