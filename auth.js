// auth.js - porta d'ingresso
(function(){
  const correctPassword = "festa2025"; // modifica qui la password se vuoi
  const btn = document.getElementById("submitBtn");
  const input = document.getElementById("passwordInput");
  const err = document.getElementById("errorMessage");

  btn.addEventListener("click", checkPassword);
  input.addEventListener("keydown", function(e){ if(e.key === "Enter") checkPassword(); });

  function checkPassword(){
    const val = input.value.trim();
    if(!val){ err.textContent = "Inserisci la password."; return; }
    if(val === correctPassword){
      // settiamo un flag in sessionStorage (valido per la sessione browser)
      sessionStorage.setItem("invited", "1");
      // reindirizziamo alla pagina principale
      window.location.href = "main.html";
    } else {
      err.textContent = "Password errata! Riprova.";
      input.value = "";
      input.focus();
    }
  }
})();
