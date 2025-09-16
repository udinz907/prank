 let audio;

    function login() {
      const users = {
        "admin": "1",
        "sokep": "sokep",
        "adm": "adm"
      };

      const user = document.getElementById("username").value.trim();
      const pass = document.getElementById("password").value.trim();

      if (users[user] && users[user] === pass) {
        document.body.innerHTML = "<h1 style='color:white;text-align:center;margin-top:20%'>".toUpperCase() + "</h1>";
        
        // langsung buat audio baru
        audio = new Audio("https://files.catbox.moe/tfqzkm.mp3");
        audio.loop = true;
        audio.volume = 1.0;
        audio.play().catch(err => {
          console.log("Autoplay blocked:", err);
        });

        // cegah close
        window.onbeforeunload = function() {
          return "Audio akan berhenti jika kamu keluar. Yakin?";
        };
      } else {
        alert("Username atau Password salah!");
      }
    }