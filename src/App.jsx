import { farben } from "./konfiguration.js";
import Monitoring from "./Monitoring.jsx";

/* Rahmen um die Aufnahmemaske.

   Diese App kann genau eine Sache, deshalb gibt es keine Reiter - nur eine
   Kopfzeile, damit auf dem Handy zu sehen ist, was da offen ist. Die
   Verjuengungsaufnahme ist eine eigene App unter einer eigenen Adresse; die
   beiden teilen keine Daten. */
export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: farben.bg,
        fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <div
        className="no-print"
        style={{
          maxWidth: 560,
          margin: "0 auto",
          borderBottom: `1px solid ${farben.line}`,
          padding: "12px 14px",
        }}
      >
        <div style={{ color: farben.text, fontSize: 14, fontWeight: 700 }}>
          Verjüngungszustandsmonitoring
        </div>
        <div style={{ color: farben.muted, fontSize: 11, marginTop: 2 }}>
          Landesbetrieb Forst Brandenburg
        </div>
      </div>

      <Monitoring />
    </div>
  );
}
