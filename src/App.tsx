import React, { useState } from 'react';

interface TaskProps {
  task: string;
  onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({ task, onDelete }) => {
  return (
    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '8px' }}>{task}</span>
      <button style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#ff4d4f', color: '#fff', border: 'none' }} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '20rem',
      height: '20rem',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
      zIndex: 9999,
      }}
    >
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Modal Content</h2>
        <p>This is the modal content.</p>
        <button onClick={onClose} style={{ padding: '8px 16px', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>
          Close
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>(['Do the dishes.', 'Finish this project.']);
  const [inputText, setInputText] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleCreateTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputText.trim() !== '') {
      setTodos([...todos, inputText]);
      setInputText('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h1>Task List</h1>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {todos.map((todo, index) => (
          <Task key={index} task={todo} onDelete={() => handleDeleteTask(index)} />
        ))}
      </ul>

      <form onSubmit={handleCreateTask} style={{ marginTop: '20px' }}>
        <input
          value={inputText}
          onChange={handleInputChange}
          style={{ padding: '8px', marginRight: '8px', width: '60%', borderRadius: '4px', border: '1px solid #ccc' }}
          placeholder="Enter a task..."
        />
        <button
          type="submit"
          style={{ padding: '8px 16px', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}
        >
          Add Task
        </button>
      </form>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button onClick={handleOpenModal}>Open Modal</button>
        {showModal && <Modal onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default App;
