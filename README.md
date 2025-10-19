# Memori

Esta API é utilizada para gerenciar o sistema MEMORI, permitindo que administradores realizem operações de CRUD (criar, ler, atualizar e deletar) por meio da página web.

## Endpoints
### GET /checkpoint
Esse endpoint é responsável por retornar a listagem de todos os checkpoints cadastrados no banco de dados.

#### Parâmetros:
Nenhum

#### Respostas:
OK! 200
Caso essa resposta aconteça, você vai receber a listagem de todos os checkpoints.

Exemplo de resposta:
**inserir resposta**

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor. Motivos podem incluir falhas na comunicação com o banco de dados.

Exemplo de resposta:
**inserir resposta**

### - POST /checkpoint
Esse endpoint é responsável por cadastrar um novo checkpoint no banco de dados.

#### Parâmetros:
nomeCheckpont: Nome do Checkpoint.<br>
latitudeCheckpoint: Latitude do Checkpoint.<br>
longitudeCheckpoin: Longitude do Checkpoint.<br>
tituloRota: Título da Rota que o Checkpoint pertence.<br>
descricaoCheckpoint: Descrições do Checkpoint.

Exemplo de requisição:
**inserir resposta**
