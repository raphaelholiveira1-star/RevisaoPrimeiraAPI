const express = require('express');

const app = express();

let alunos = [
    {id: 1, nome: 'João', curso: 'Desenvolvimento de Sistemas'},
    {id: 2, nome: 'Maria', curso: 'Rede de Computadores'},
    {id: 3, nome: 'Pedro', curso: 'Banco de Dados'},
    {id: 4, nome: 'Ana', curso: 'Administração'},
    {id: 5, nome: 'Carlos', curso: 'Desenvolvimento de Sistemas'},
];

app.get('/', (req, res) => {
    res.json({
        menssagem: 'API Alunos funcionando'
    })
});

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
    console.log(`Acesse: http://localhost:${PORTA}`);
})

