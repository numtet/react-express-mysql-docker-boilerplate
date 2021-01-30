# DB
## about initdb.d/
To make database schema as you want, put initializing SQL files here (Table schemas or data required for your environment).
But this project uses `world` database below within backend ORM sample code(with `TypeORM`), so it's better to exercise as it is to know how it works.
This supports `.sql`, `.sh` and `.sql.gz`. 

### no Dockerfile
this DB module doesn't include `Dockerfile`, because it's convenient to initialize database by changing SQLs you put in `initdb.d` dorectory.
`docker-compose` command reads new SQLs with `-d` option like `docker-compose up -d`.

## sample data
This project uses `world` database from MySQL [official](https://dev.mysql.com/doc/index-other.html).
