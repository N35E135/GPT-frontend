document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("myButton");
    const message = document.getElementById("message");

    button.addEventListener("click", () => {
        message.style.display = "block"; // メッセージを表示
    });
});
