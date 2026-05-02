const express = require('express');
const os = require('os');
const app = express();
const PORT = 3000;

const toMB = (bytes) => (bytes / 1024 / 1024).toFixed(2);

app.get('/', (req, res) => {
    res.json({
        proyecto: "Laboratorio DevOps Sesión 1",
        estudiante_rol: "Software Engineer",
        entorno_info: {
            sistema_operativo: os.type(),
            plataforma: os.platform(),
            arquitectura: os.arch(),
            host_name: os.hostname(),
            uptime_segundos: os.uptime(),
            recursos_contenedor: {
                memoria_total_mb: toMB(os.totalmem()),
                memoria_libre_mb: toMB(os.freemem()),
                cpus: os.cpus().length
            }
        },
        status: "Online",
        mensaje: "¡Contenedor Docker ejecutándose con éxito!"
    });
});

app.listen(PORT, () => {
    console.log(`\nServidor Profesional DevOps corriendo`);
    console.log(`URL: http://localhost:${PORT}`);
    console.log(`Host: ${os.hostname()}\n`);
});