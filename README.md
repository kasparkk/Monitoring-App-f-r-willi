# Verjüngungszustandsmonitoring

Aufnahmemaske für das Verjüngungszustandsmonitoring des Landesbetriebs
Forst Brandenburg, für das Handy im Bestand.

Die Maske bildet die Spalten der Excel-Vorlage ab: Kopfdaten zum
Probekreis, die Pflanzenaufnahme mit Baumart, Höhenklasse und Verbiss,
die Auswertung je Punkt. Herauskommen eine Excel-Mastertabelle mit allen
49 Spalten, eine CSV und Geodaten als GeoJSON.

Sollpunkte lassen sich aus einem Geoprogramm einlesen (GeoJSON, CSV, GPX
oder KML); die Ist-Position kommt vom Handy oder vom Messstab und wird
gegen den Sollpunkt geprüft - Entfernung und Richtung stehen daneben.

## Womit

Eine Seite, React und Vite, sonst nichts. Kein Server, keine Anmeldung:
die laufende Aufnahme liegt im Speicher des Geräts und verlässt es nur
über die Ausgabedateien. Ein Service Worker hält die App auch ohne Netz
lauffähig - im Wald der Normalfall.

Die Verjüngungsaufnahme im Probekreisverfahren ist eine eigene App unter
eigener Adresse. Die beiden teilen keine Daten.

## Entwickeln

    npm install
    npm run dev      # örtlich zum Ausprobieren
    npm run build    # nach dist/, das veröffentlicht Netlify
