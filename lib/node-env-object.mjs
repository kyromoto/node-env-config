export function getEnv (prefix, delimiter) {
    const reducer = (acc, curr, index) => {
        if (index == 0) {
            acc += curr
        } else {
            acc += delimiter + curr
        }
    
        return acc
    }
    
    const proc = (delimiter, key, config, value) => { 
    
        const splitted = key.split(delimiter)
    
        if (splitted.length == 1) {
            config[splitted[0]] = value
            return
        }
    
        if (typeof config[splitted[0]] == 'undefined') {
            config[splitted[0]] = {}
        }
    
        const newKeyArray = splitted.slice(1, splitted.length)
        const newKeyString = newKeyArray.reduce(reducer, "")
        
        proc (delimiter, newKeyString, config[splitted[0]], value)
    }
    
    const config = {}

    for ( const key of Object.keys(process.env)) {
        if (key.startsWith(prefix)) {
            const value = process.env[key]
            proc (delimiter, key, config, value)
        }
    }

    return config
}
