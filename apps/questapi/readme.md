# questapi service #

## set up mysql env ##
`DATABASE_URL="mysql://username:password@host:port/dbname"`

## available moon task ##
### run this scripts in root folder of the project (WAHA) ###

1. To install all questapi dependencies: <br />
`moon questapi:install`

2. To generate prisma client: <br />
`moon questapi:generateprismaclient`

3. To migrate database table: <br />
`moon questapi:migratedb`

4. To run the service in dev mode (using <b>nodemon</b>): <br />
`moon questapi:dev`

5. To build the service: <br />
`moon questapi:build`

6. To start the service: <br />
`moon questapi:start`

<em>You can see all the available scripts in moon.yml</em>

## table structure ##
You can view table structure here [schema.prisma](prisma/schema.prisma).

## api endpoints ##
You can view api endpoint and sample param here [quest.postman_collection.json](./quest.postman_collection.json)