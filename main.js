// main.js - controllo accesso, countdown e generazione stelline
(function(){

  // controllo accesso: redirect se non invitato
  try {
    if(sessionStorage.getItem("invited") !== "1"){
      window.location.href = "index.html";
      return;
    }
  } catch(e){
    // se sessionStorage bloccato, prosegui comunque
  }

  // COUNTDOWN
  document.addEventListener("DOMContentLoaded", function(){
    const eventTime = new Date("2025-11-29T22:00:00+01:00").getTime();

    const elDays = document.getElementById("days");
    const elHours = document.getElementById("hours");
    const elMinutes = document.getElementById("minutes");
    const elSeconds = document.getElementById("seconds");

    function updateCountdown(){
      const now = Date.now();
      let diff = eventTime - now;

      if(diff <= 0){
        if(elDays) elDays.textContent = "0";
        if(elHours) elHours.textContent = "00";
        if(elMinutes) elMinutes.textContent = "00";
        if(elSeconds) elSeconds.textContent = "00";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);
      const seconds = Math.floor(diff / 1000);

      if(elDays) elDays.textContent = days;
      if(elHours) elHours.textContent = String(hours).padStart(2,"0");
      if(elMinutes) elMinutes.textContent = String(minutes).padStart(2,"0");
      if(elSeconds) elSeconds.textContent = String(seconds).padStart(2,"0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // STARS: genera stelline dorate casuali sullo sfondo con lieve movimento
    generateStars(40); // numero stelle totale

    function generateStars(count){
      const root = document.getElementById("stars-root");
      if(!root) return;
      const ww = window.innerWidth;
      const hh = window.innerHeight;

      for(let i=0;i<count;i++){
        const s = document.createElement("div");
        s.className = "star";
        const size = (Math.random() < 0.25) ? (Math.random()*3 + 2) : (Math.random()*1.8 + 0.8); // grandi e piccole
        s.style.width = size + "px";
        s.style.height = size + "px";
        const left = Math.random()*100;
        const top = Math.random()*100;
        s.style.left = left + "%";
        s.style.top = top + "%";

        // durata e delay lievi per movimento
        const dur = (Math.random()*6 + 6).toFixed(2); // 6-12s
        const delay = (Math.random()*4).toFixed(2);
        s.style.animation = `floatTiny ${dur}s ease-in-out ${delay}s infinite`;
        s.style.opacity = 0.9 - Math.random()*0.3;
        // occasionalmente rendi qualche stella un po' più luminosa
        if(Math.random() > 0.92){
          s.style.boxShadow = "0 0 10px rgba(207,166,74,0.28)";
        }

        root.appendChild(s);
      }
    }
  });

})();
