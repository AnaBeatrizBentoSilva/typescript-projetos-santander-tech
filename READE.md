#Configuração do TypeScript

1. Inicializar um projeto Node.js
    1.1 npm init ou npm init -y(isso para todas as perguntas)

2. Instalar o TypeScript
    2.1 Instalação global(na máquina - não recomendável)
        2.1.1 npm install -g typescript
    2.2 Instalação local (dentro do projeto)
        2.2.1 npm install typescript
        
    * Quando uma biblioteca só vai ser necessária no desenvolvimento do código: é só adicionar no final da instalação -D 
        * Exemplo: npm install typescript -D

3. Utilizar o TypeScript instalado para converter o código TS para JS
    3.1 npx tsc nomeDoArquivo
        3.1.1 npx tsc aula1/index.ts
            3.1.1.1 Todas as vezes que fizer uma mudança no TS, tem que rodar esse comando
            3.1.1.2 Mas se eu rodas com --watch, não vou precisar ficar rodando isso todas as vezes
                3.1.1.2.1 npx tsc aula1/index.ts --watch

4. Configurar o TS
    4.1 npx tsc --init
        4.1.1 Já dá para rodar todos os arquivos TS de uma vez
            4.1.1.1 npx tsc
        4.1.2 Para mudar as versões, é só ir no tsconfig, mudar manualmente e rodar
            4.1.2.1 "target": "ES6" -> mudando para outra versão, por padrão vem a ES2016
            4.1.2.2 Nunca mudar  "strict": true para false, pois ele faz todo tipo de checagem e tipagem 
                4.1.2.2.1 Se precisar desabilitar alguma configuração, basta definir como false. Descomente as demais linhas e marque como false apenas a que deseja desabilitar especificamente.
        4.1.3 Para impedir a geração do JS em caso de erro no arquivo TS, basta descomentar a configuração "noEmitOnError": true
        4.1.4 Para que o arquivo JS não seja criado na mesma pasta do TS, basta descomentar a configuração "outDir": "./",
            4.1.4.1 "outDir": "./dist",  