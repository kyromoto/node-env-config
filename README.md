# node-env-object

Simple node module to convert an .env file to an js object.

## Quick start

To be able to process envs from .env file load them first. I prefere the dotenv package from npm.

```shell
npm install dotenv https://github.com/kyromoto/node-env-object.git
```

An example .env:

```text
api.port=300
api.host=0.0.0.0
```

To use node-env-object you need to integrate it in your application.

```javascript
import dotenv from "dotenv"
import { getEnv } from "node-env-object"

dotenv.config()

const config = getEnv("api", ".")
```

This will transform the .env to an js object.

```javascript
{
    "api" : {
        "port" : 3000,
        "host" : "0.0.0.0"
    }
}
```
