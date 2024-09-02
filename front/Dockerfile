# Dockerfile for React Front-end
# Use a imagem oficial do Node.js como base
FROM node:18 AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código fonte
COPY . .

# Construa a aplicação
RUN npm run build

# Usa uma imagem do Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copia os arquivos construídos para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
