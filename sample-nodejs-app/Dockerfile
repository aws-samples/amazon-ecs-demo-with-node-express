FROM public.ecr.aws/bitnami/node:16.18.1
RUN mkdir -p /usr/src/calc
WORKDIR /usr/src/calc
COPY . .
RUN npm install
# EXPOSE 3000
CMD [ "node", "app.js" ]
