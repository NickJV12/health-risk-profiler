// import React from "react";

// export default function RiskReport({ result }) {
//   if (!result) return null;

//   // Return everything as a single plain JSON object
//   return (
//     <pre style={{ whiteSpace: "pre-wrap", fontSize: "16px" }}>
//       {JSON.stringify(result, null, 2)}
//     </pre>
//   );
// }
import React from "react";

export default function RiskReport({ result }) {
  if (!result) return null;

  const { answers, factors, risk_level, recommendations } = result;

  return (
    <div style={{ maxWidth: 800, margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: 16 }}>Health Risk Report</h2>

      <section style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Answers</h3>
        <pre style={{ background: "#f4f4f4", padding: 10, borderRadius: 5 }}>
          {JSON.stringify(answers, null, 2)}
        </pre>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Factors</h3>
        <ul style={{ paddingLeft: 20 }}>
          {factors.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Risk Level</h3>
        <p style={{ color: "red", fontWeight: "bold", fontSize: 16 }}>{risk_level.toUpperCase()}</p>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Recommendations</h3>
        <ul style={{ paddingLeft: 20 }}>
          {recommendations.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
