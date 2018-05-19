# `pgql`
### Pretty printing GraphQL micro-service

#### Usage
Please send your query/mutation as text in the body of a `POST` request

#### Examples
```sh
$ curl https://pgql.now.sh -X POST -d 'query { hello }'
```

or if you want to use the clipboard, create this alias:
```sh
$ alias pgql='curl https://pgql.now.sh -X POST -d "$(pbpaste)"'
```
