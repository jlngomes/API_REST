import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        date: new Date().toLocaleString('pt-BR'), // Corrigido: toLocaleString
        status: 'API no Render funcionando!'
    });
});

// Porta dinâmica para render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

console.log(`Deu certo!!`);