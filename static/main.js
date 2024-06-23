// static/main.js

function toggle(pin, action) {
    fetch(`/${action}/${pin}`, { method: 'POST' })
        .then(response => {
            if (!response.ok) {
                alert("Falha na comunicação com o servidor!");
            }
        });
}

function updateHexDisplay() {
    fetch("/read_pins")
        .then(response => response.json())
        .then(data => {
            document.getElementById('hex-display').innerText = "Valor Hex: " + data.hex_value;
        });
}

setInterval(updateHexDisplay, 1000);
