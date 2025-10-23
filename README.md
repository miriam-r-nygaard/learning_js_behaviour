# 🧠 Introduktion til JavaScript Behaviour
Dette materiale er lavet til undervisningen i **programmering (JavaScript for begyndere)**.  
Formålet er at introducere de mest grundlæggende begreber i JavaScript gennem **små, interaktive øvelser**, der viser hvordan koden kan manipulere elementer på en webside.

---

## 🎯 Formål
De studerende skal lære at forstå, hvordan JavaScript:
- arbejder sammen med HTML og CSS  
- reagerer på **events** (klik, vinduesstørrelse osv.)  
- **ændrer DOM’en** (tekst, billeder, farver, lyd og stil)  
- bruger **betingelser (if/else)** til at skabe interaktiv adfærd  
- anvender **variabler** og **funktioner** til at strukturere kode  

I alle 9 opgaver arbejder de studerende primært i **JavaScript-filen** (`script.js`)  
og i mindre grad i **HTML-filen** for at forbinde koden med de elementer, der skal manipuleres.

---


### 🟨 Opgave 1 – Skift baggrundsfarve
Introduktion til DOM-manipulation via `document.body.style`.

**Læringsmål:**  
Forstå hvordan man kan tilgå og ændre HTML-elementers stil direkte med JavaScript.

---

### 🌙 Opgave 2 – Lys og mørk tilstand
To knapper ændrer baggrundsfarven mellem “light mode” og “dark mode”.

**Læringsmål:**  
- Tilføje *event listeners* til knapper  
- Ændre CSS-styles dynamisk  

---

### 🌈 Opgave 3 – Skift farve efter vinduets bredde
Baggrundsfarven ændres automatisk, når brugeren ændrer browserens størrelse.

**Læringsmål:**  
- Bruge `window.innerWidth`  
- Arbejde med **betingelser (if/else)**  
- Reagere på **window events** (`resize`)

---

### ➕➖ Opgave 4 – Simpel lommeregner
To inputfelter til addition og subtraktion med resultatfelt.

**Læringsmål:**  
- Hente og konvertere inputværdier  
- Udføre beregninger  
- Sætte værdier dynamisk i et inputfelt  

---

### 🖼️ Opgave 5 – Skift billede ved klik
En knap, der skifter mellem to billeder (“Before” / “After”).

**Læringsmål:**  
- Skifte `src` på et billede  
- Bruge **if/else** til at toggle mellem to tilstande  

---

### 🔍 Opgave 6 – Zoom tekst ind/ud
Knap, der ændrer størrelsen på et tekst-element og skifter mellem “Zoom ind” og “Zoom ud”.

**Læringsmål:**  
- Arbejde med **DOM-styling**  
- Ændre knaptekst dynamisk  
- Genbruge logik fra tidligere opgaver  

---

### 💬 Opgave 7 – Skift tekst ved klik
Et tekstfelt, der ændrer indhold mellem to beskeder ved klik.

**Læringsmål:**  
- Skifte tekstindhold med `innerHTML` og `textContent`  
- Forstå `this` i en event listener  
- Introduktion til toggle-adfærd  

---

### 💫 Opgave 8 – Simpel animation med CSS + JS
Et element får en CSS-animation (“fade”) når man klikker på det.

**Læringsmål:**  
- Samspil mellem CSS-animationer og JavaScript  
- Tilføje og fjerne CSS-klasser med `classList.add()` / `remove()`  
- Bruge `setTimeout()`  

---

### 🦁 🐶 🐘 🐒 Opgave 9 – Afspil lyd ved klik
Fire knapper afspiller forskellige dyrelyde.

**Læringsmål:**  
- Introduktion til lyd i webprojekter med `Audio()`  
- Forstå hvordan flere knapper kan styre forskellige elementer  
- Arbejde med filer og stier i JavaScript  

---

## 🧩 Fælles pointer for alle øvelser
- Alle øvelser viser **et centralt koncept** i JavaScript.  
- Fokus er på **forståelse frem for kompleksitet**.  
- Koden er enkel, lineær og nem at forklare i fællesskab.  
- Hver øvelse kan vises “live” i browseren, så de studerende ser effekten direkte.