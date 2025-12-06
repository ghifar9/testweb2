function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let userBenar = "happy";      // ubah sesuai kebutuhan
    let passBenar = "password123";      // ubah sesuai kebutuhan

    if (user === userBenar && pass === passBenar) {
        window.location.href = "index.html";  // halaman tujuan
    } else {
        document.getElementById("error").innerText = "Username atau password salah!";
    }
}
