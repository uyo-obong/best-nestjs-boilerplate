FROM node:16 AS development

WORKDIR /usr/src/project

COPY package*.json ./

RUN npm i -g @nestjs/cli

RUN npm install

RUN npm install glob rimraf

# If you are building your code for production
RUN #npm install ci --only=production

COPY . .

EXPOSE 6000

CMD ["nest", "start"]
