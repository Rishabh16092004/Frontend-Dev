import React, { useState } from 'react';

export default function StudentForm({ initialData = null, onCancel, onSubmit }) {
  const [name, setName] = useState(initialData ? initialData.name : '');
  const [section, setSection] = useState(initialData ? initialData.section : '');
  const [marks, setMarks] = useState(initialData ? initialData.marks : '');
  const [grade, setGrade] = useState(initialData ? initialData.grade : '');

  function handleSubmit(e) {
    e.preventDefault();
    // minimal validation
    if (!name || !section || marks === '') {
      alert('Please fill name, section and marks');
      return;
    }

    const payload = {
      name: name.trim(),
      section: section.trim(),
      marks: Number(marks),
      grade: grade.trim() || computeGrade(Number(marks)),
    };

    onSubmit(payload);
  }

  function computeGrade(m) {
    if (m >= 90) return 'A+';
    if (m >= 80) return 'A';
    if (m >= 70) return 'B';
    if (m >= 60) return 'C';
    return 'D';
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>{initialData ? 'Edit Student' : 'Add Student'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Section: </label>
          <input value={section} onChange={e => setSection(e.target.value)} />
        </div>
        <div>
          <label>Marks: </label>
          <input type="number" value={marks} onChange={e => setMarks(e.target.value)} />
        </div>
        <div>
          <label>Grade: </label>
          <input value={grade} onChange={e => setGrade(e.target.value)} placeholder="optional" />
        </div>

        <div style={{ marginTop: 12 }}>
          <button type="submit">Save</button>{' '}
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}