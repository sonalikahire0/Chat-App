const socket = io();

const form = document.getElementById("chatForm");
const usernameInput = document.getElementById("usernameInput");
const messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const msgData = {
        user: usernameInput.value,
        text: messageInput.value
    };

    socket.emit("chat message", msgData);
    messageInput.value = "";
});

socket.on("chat message", (msgData) => {
    const li = document.createElement("li");
    li.textContent = `${msgData.user}: ${msgData.text}`;
    messages.appendChild(li);
});
