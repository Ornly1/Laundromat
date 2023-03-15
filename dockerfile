FROM node:18-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /src/builder

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "preview"]
