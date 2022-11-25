# node-env-config

Simple node module to convert an .env file to an config object.

## Quick start

To be able to process envs from .env file load them first. I prefere the dotenv package from npm.

```shell
$ npm install dotenv
$ npm install https://github.com/kyromoto/node-env-config.git
```

An example .env:

```text
api.port=300
api.host=0.0.0.0
```

To use node-env-config you need to integrate it in your application.

```javascript
import dotenv from "dotenv"
import { getConfig } from "node-env-config"

dotenv.config()

const config = getConfig("api", ".")
```

This will transform the .env to and json object.

```javascript
{
    "api" : {
        "port" : 3000,
        "host" : "0.0.0.0"
    }
}
```