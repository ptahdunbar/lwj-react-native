# Install everything needed for node
FROM node:current-slim

RUN apt-get update && apt-get install curl -y && \
    apt-get install -y nodejs npm

WORKDIR /usr/src/apps/express
COPY --chmod=0755 docker/entrypoint.sh entrypoint.sh
COPY . .
RUN npm ci

ENTRYPOINT ["./entrypoint.sh"]
