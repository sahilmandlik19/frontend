import { useState } from "react";

export default function Table() {
  const [entries, setEntries] = useState([
    { id: 1, date: "2025-02-23", title: "Groceries", amount: 50, type: "Expense", category: "Food" },
    { id: 2, date: "2025-02-22", title: "Salary", amount: 2000, type: "Income", category: "Job" },
    { id: 3, date: "2025-02-21", title: "Rent", amount: 800, type: "Expense", category: "Housing" },
    { id: 4, date: "2025-02-20", title: "Freelance Work", amount: 500, type: "Income", category: "Side Job" },
  ]);

  const handleDelete = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px",marginLeft:"0px" }}>
      <div style={{ padding: "10px", background: "#fff", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", width: "100%" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "16px" }}>
          <thead>
            <tr style={{ background: "#007bff", color: "#fff" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd", width: "20%" }}>Date</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Title</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Amount</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Type</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Category</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(entry => (
              <tr key={entry.id}>
                <td style={{ padding: "10px", border: "1px solid #ddd", width: "20%" }}>{entry.date}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{entry.title}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>${entry.amount}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{entry.type}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{entry.category}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <button style={{ marginRight: "5px", padding: "6px", background: "#ffc107", border: "none", color: "#000", borderRadius: "3px", cursor: "pointer" }}>Modify</button>
                  <button onClick={() => handleDelete(entry.id)} style={{ padding: "6px", background: "#dc3545", border: "none", color: "#fff", borderRadius: "3px", cursor: "pointer" }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button style={{ marginTop: "10px", padding: "10px", background: "#28a745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "14px" }}>
        Add New
      </button>
    </div>
  );
}
