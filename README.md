# Caxias em Escala

Gestão semanal de jornadas para equipes da Prefeitura de Caxias - MA. React/Vite no front-end, API Node, Neon Postgres, Neon Auth e Render.

## Instalação local

1. Crie um projeto Neon separado e habilite autenticação por e-mail e senha.
2. Execute `neon/schema.sql` no SQL Editor.
3. Copie `.env.example` para `.env.local` e preencha as URLs.
4. Autorize `http://127.0.0.1:5173` no Neon Auth.
5. Execute `npm install`; depois `npm start` e `npm run dev` em terminais diferentes.
6. Na primeira tela, clique em **Criar acessos iniciais**.

### Contas iniciais

- Administrador: `admin@caxiasemescala.com.br` / `CaxiasAdmin@2026`
- Gestor: `gestor@caxiasemescala.com.br` / `CaxiasGestor@2026`

Troque as senhas antes da publicação.

## Permissões

- Administrador: operação completa, usuários e auditoria.
- Gestor: funcionários, setores, turnos e escalas.
- Funcionário: consulta da própria escala; o e-mail da conta deve coincidir com o e-mail do cadastro funcional.

O histórico de auditoria é gravado em tabela própria, fora do estado editável do aplicativo.
