// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000",       // black background
        color: "#ff4d4d",              // red text
        textAlign: "center",
        padding: "15px 0",
        fontSize: "16px",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        borderTop: "2px solid #ff4d4d", // red top border
        zIndex: 100,
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Anime World — Best platform for streaming.
      </p>
    </footer>
  );
}
