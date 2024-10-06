const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch('http://localhost:8080/api/usuarios/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      console.log('Usuário cadastrado com sucesso');
    } else {
      console.log('Erro: ' + data);
    }
  };
  