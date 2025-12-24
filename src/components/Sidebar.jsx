export default function Sidebar({ open, closeSidebar, setSection, section }) {
  return (
    <>
      {/* Overlay */}
      {open && <div className="overlay" onClick={closeSidebar}></div>}

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <h3 className="side-title">Menu</h3>

        <ul>
          <li className={section==="Home"?"active":""} onClick={() => {setSection("Home"); closeSidebar();}}>Home</li>
          <li className={section==="Anime"?"active":""} onClick={() => {setSection("Anime"); closeSidebar();}}>Anime</li>
          <li className={section==="Movies"?"active":""} onClick={() => {setSection("Movies"); closeSidebar();}}>Movies</li>
          <li className={section==="Watchlist"?"active":""} onClick={() => {setSection("Watchlist"); closeSidebar();}}>Watchlist</li>
        </ul>
      </aside>
    </>
  );
}
