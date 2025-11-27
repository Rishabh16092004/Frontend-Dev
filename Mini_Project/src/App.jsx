import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import * as studentService from './services/studentService';

export default function App() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState('list'); // 'list' | 'add' | 'edit' | 'details'
  const [selected, setSelected] = useState(null);

  async function loadStudents() {
    try {
      const data = await studentService.getAllStudents();
      setStudents(data);
    } catch (err) {
      alert('Failed to load students: ' + err.message);
    }
  }

  function handleAddClick() {
    setSelected(null);
    setMode('add');
  }
  function handleEditClick(student) {
    setSelected(student);
    setMode('edit');
  }
  function handleViewClick(student) {
    setSelected(student);
    setMode('details');
  }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure you want to delete this student?')) return;
    try {
      await studentService.deleteStudent(id);
      alert('Deleted. Click Load Students to refresh list.');
    } catch (err) {
      alert('Failed to delete: ' + err.message);
    }
  }

  async function handleFormSubmit(payload) {
    try {
      if (mode === 'add') {
        await studentService.createStudent(payload);
        alert('Created. Click Load Students to see it.');
      } else if (mode === 'edit') {
        await studentService.updateStudent(selected.id, payload);
        alert('Updated. Click Load Students to see changes.');
      }
      setMode('list');
    } catch (err) {
      alert('Failed to save: ' + err.message);
    }
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <h1>Student Result App</h1>

      {mode === 'list' && (
        <StudentList
          students={students}
          onLoad={loadStudents}
          onAdd={handleAddClick}
          onEdit={handleEditClick}
          onDelete={handleDelete}
          onView={handleViewClick}
        />
      )}

      {mode === 'add' && (
        <StudentForm onCancel={() => setMode('list')} onSubmit={handleFormSubmit} />
      )}

      {mode === 'edit' && (
        <StudentForm
          initialData={selected}
          onCancel={() => setMode('list')}
          onSubmit={handleFormSubmit}
        />
      )}

      {mode === 'details' && (
        <StudentDetails student={selected} onBack={() => setMode('list')} />
      )}

    </div>
  );
}