async function cadastrar() {
  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const loja = document.getElementById("loja").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg");

  if (!nome || !cpf || !loja || !telefone || !email) {
    msg.innerText = "Preenche tudo aí.";
    msg.className = "msg erro";
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/vendedor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nome, cpf, loja, telefone, email })
    });

    if (res.ok) {
      msg.innerText = "Cadastro realizado com sucesso!";
      msg.className = "msg sucesso";
    } else {
      msg.innerText = "Erro ao cadastrar.";
      msg.className = "msg erro";
    }

  } catch (err) {
    msg.innerText = "Erro de conexão.";
    msg.className = "msg erro";
  }
}