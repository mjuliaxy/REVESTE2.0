// se voce estiver usando live server (porta 5500), ele vai conectar na 8080
// se voce estiver usando o localhost:8080 direto, ele tambem funciona
const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? 'http://localhost:8080' 
    : '';

export const RevesteService = {
    // funcao de login
    async login(email, senha) {
        try {
            console.log("Tentando logar em: " + API_URL + "/login");
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Erro no fetch do login:", error);
            return { success: false, message: "Nao conseguiu conectar no servidor (porta 8080)" };
        }
    },

    // funcao de cadastro
    async signup(nome, email, senha) {
        try {
            console.log("Tentando cadastrar em: " + API_URL + "/signup");
            const response = await fetch(`${API_URL}/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, email, senha })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Erro no fetch do cadastro:", error);
            return { success: false, message: "Nao conseguiu conectar no servidor (porta 8080)" };
        }
    }
};
