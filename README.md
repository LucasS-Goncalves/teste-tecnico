<h1>Teste Técnico - Front End</h1>

<p>Este é o resultado final do teste técnico para a vaga de desenvolvedor Angular. O projeto consiste em três páginas: uma página de cadastro, uma página para visualizar os clientes cadastrados e uma página para visualizar os dados de um cliente específico. Na construção deste projeto, utilizei Angular, TypeScript, RxJS, HTML e CSS.
</p>

<p>Link do projeto: https://teste-tecnico-gilt.vercel.app/</p>
<p>Meu LinkedIn: https://www.linkedin.com/in/lucas-gon%C3%A7alves-3a2662252/</p>

<h3>Estrutura do Projeto</h3>

<h4>
  Página de cadastro
</h4>

<p>A página de cadastro consome a API do ViaCep quando o usuário preenche o campo de CEP. Se o usuário inserir um CEP válido, uma função é acionada para preencher automaticamente os campos correspondentes com as informações disponíveis. Isso melhora a experiência do usuário ao simplificar o preenchimento dos dados.</p>

<p>
  Os campos são validados utilizando Reactive Forms, sendo todos obrigatórios e sujeitos a padrões específicos ou a um número mínimo de caracteres (por exemplo, o campo de nome completo requer um mínimo de 8 caracteres). Os campos de complemento e referência não possuem validações específicas. O usuário será alertado ao sair de um campo sem preenchê-lo ou se o conteúdo for inválido.
</p>

<p>Na página de cadastro, há dois botões: um para redefinir os valores do formulário e outro para cadastrar o cliente. O botão de cadastro é desabilitado quando o formulário está inválido.</p>

<p>É impossível cadastrar mais de um cliente com o mesmo CPF. Se houver uma tentativa nesse sentido, uma mensagem de erro será exibida, persistindo até que o usuário a feche manualmente ou adicione um cliente com um CPF não cadastrado.</p>

<p>Quando o formulário estiver preenchido corretamente (respeitando a regra do CPF mencionada anteriormente) e o usuário realizar o cadastro, um pop-up de sucesso será exibido. Este pop-up desaparecerá em 3 segundos, a menos que o usuário o feche manualmente. Todos os clientes são armazenados no localStorage.</p>

<h4>
  Página de clientes e Página de um cliente
</h4>

<p>
  Na página, há um campo de busca que permite localizar um cliente cadastrado pelo nome ou CPF.
</p>

<p>
  Os clientes são apresentados em uma tabela, exibindo apenas nome e CPF.
</p>

<p>
 Clientes podem ser excluídos da tabela ao clicar no botão 'X' no lado de cada cliente.
</p>

<p>Ao clicar no nome ou CPF do cliente, o usuário será direcionado para uma página com todas as informações relacionadas a esse cliente.</p>

<hr>

<h4>Página de cadastro</h4>

![d-1](https://github.com/LucasS-Goncalves/teste-tecnico/assets/122225674/09167ec9-036c-436f-b49f-3f883d60b8ef)
![d-1-invalid](https://github.com/LucasS-Goncalves/teste-tecnico/assets/122225674/65edf3ce-f7bb-4730-9ac1-04b2ad71591c)

<h6>Mensagens</h6>

![success](https://github.com/LucasS-Goncalves/teste-tecnico/assets/122225674/6b11a2ed-d63e-4299-91cf-6de13c793b81)
![error](https://github.com/LucasS-Goncalves/teste-tecnico/assets/122225674/804c107b-299e-4515-9f32-0b6fcf8c84ee)

<h6>Formulário inválido</h6>

![d-1-invalid](https://github.com/LucasS-Goncalves/teste-tecnico/assets/122225674/61e03752-7f38-4095-bee9-0a1acf8fa090)
![m-1-invalid](https://github.com/LucasS-Goncalves/teste-tecnico/assets/122225674/42d06951-e06f-4fc7-9d16-265e87bc18ea)

<hr>

<h4>Página de clientes</h4>

![clientes-d-1](https://github.com/LucasS-Goncalves/teste-tecnico/assets/122225674/fba1224c-33fa-44ec-a0a1-80abee4794dd)
![clientes-d-2](https://github.com/LucasS-Goncalves/teste-tecnico/assets/122225674/94ba4a9e-bf4f-43a6-bc0d-6eb82c8a1cab)

<h4>Página do cliente</h4>

![cliente-1](https://github.com/LucasS-Goncalves/teste-tecnico/assets/122225674/893cc3ab-51f0-4f14-b4de-f6bc35888933)


