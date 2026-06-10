#  Calculadora do Tri Mundial

Uma calculadora web simples e responsiva desenvolvida com **HTML, CSS e JavaScript**, inspirada no São Paulo Futebol Clube e no título do Mundial de Clubes.

##  Funcionalidades

- Realiza operações matemáticas básicas:
  - Adição (+)
  - Subtração (-)
  - Multiplicação (*)
  - Divisão (/)
- Botão para limpar toda a tela.
- Botão para apagar o último caractere digitado.
- Suporte ao teclado.
- Interface moderna e responsiva.
- Tema personalizado com imagem de fundo do Morumbi.

---

##  Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

---

##  Estrutura do Projeto

```plaintext
 Calculadora-Tri-Mundial
├── index.html
├── style.css
├── script.js
└── img
    ├── morumbi.jpg
    └── Calculadora.png
```

---

##  Interface

A calculadora possui:

- Display para exibir números e resultados.
- Botões numéricos de 0 a 9.
- Operadores matemáticos.
- Botão de limpar (C).
- Botão de deletar (Del).
- Botão de resultado (=).

---

##  Atalhos do Teclado

| Tecla | Função |
|--------|---------|
| 0-9 | Digitar números |
| + | Soma |
| - | Subtração |
| * | Multiplicação |
| / | Divisão |
| . | Número decimal |
| Enter | Calcular resultado |
| = | Calcular resultado |
| Esc | Limpar tela |
| Backspace | Apagar último caractere |

---

##  Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/calculadora-tri-mundial.git
```

2. Entre na pasta do projeto:

```bash
cd calculadora-tri-mundial
```

3. Abra o arquivo `index.html` em seu navegador.

---

##  Funcionamento do JavaScript

### adicionarValor(valor)

Adiciona números ou operadores ao display.

```javascript
adicionarValor("5");
```

### limparTela()

Limpa completamente o display.

```javascript
limparTela();
```

### apagarUltimo()

Remove o último caractere digitado.

```javascript
apagarUltimo();
```

### calcularResultado()

Calcula a expressão digitada utilizando `eval()`.

```javascript
calcularResultado();
```

---

##  Observação

No evento do teclado existe um pequeno ajuste que pode ser feito:

### Atual

```javascript
if(tecla === "BackSpace"){
    apagarUltimo
}
```

### Correto

```javascript
if(tecla === "Backspace"){
    apagarUltimo();
}
```

Isso garante que a tecla Backspace funcione corretamente.

---

##  Autor

Desenvolvido por **Nikolas Mauer Godoy**.



---

##  Licença

Este projeto é de uso educacional e livre para estudos e modificações.