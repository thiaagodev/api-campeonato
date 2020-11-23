const request = require('supertest');

let PLAYER_TEST_ID = {};

const SERVER_IP = 'localhost:3333'

describe('Players', () => {
    it('Deve cadastrar 1 player para o campeonato', async () => {
        const response = await request(SERVER_IP)
            .post('/players')
            .send({
                name: 'Player_Test'
            });
        
        PLAYER_TEST_ID = response.body._id;
        expect(response.status).toBe(200);
    });

    it('Deve atualizar o player com 1 win e 2 gols marcados', async() => {
        const response =  await request(SERVER_IP)
            .put(`/players/${PLAYER_TEST_ID}`)
            .send({
                wins: 1,
                loses: 0,
                goalsScored: 2,
                concededGoals: 0
            });

        expect(response.status).toBe(200);
    });

    it('Deve mostrar todos os players', async() => {
        const response = await request(SERVER_IP)
            .get('/players');

        expect(response.status).toBe(200);
    });

    it('Deve mostrar um único player por id', async() => {
        const response = await request(SERVER_IP)
            .get(`/players/${PLAYER_TEST_ID}`);

        expect(response.status).toBe(200);
    })

    it('Deve deletar o usuário teste', async() => {
        const response = await request(SERVER_IP) 
            .delete(`/players/${PLAYER_TEST_ID}`);
         
        expect(response.status).toBe(200);
    });
});
