import React from 'react';

export default function StudentDetails({ student, onBack }) {
  if (!student) return null;
  return (
    <div style={{ padding: 16 }}>
      <h2>Student Details</h2>
      <div><strong>ID:</strong> {student.id}</div>
      <div><strong>Name:</strong> {student.name}</div>
      <div><strong>Section:</strong> {student.section}</div>
      <div><strong>Marks:</strong> {student.marks}</div>
      <div><strong>Grade:</strong> {student.grade}</div>

      <div style={{ marginTop: 12 }}>
        <button onClick={onBack}>Back</button>
      </div>
    </div>
  );
}