# DB
## about initdb.d/
Put initializing SQL files here (Table schemas or data required for your environment). 

### 

### why?
`mysql-docker` container reads docker-entrypoint-initdb.d/ and run sqls inside. This supports `.sql`, `.sh` and `.sql.gz`.
https://hub.docker.com/_/mysql/
