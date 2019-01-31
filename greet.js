function greet(name){
    if(name == (null)){
        return 'Hello, my friend.'
    }
    else if(typeof(name)==="object"){
        if(name.length === 2){
            return `Hello, ${name[0]} and ${name[1]}.`
        }else if (name.length > 2){
            var st = name.slice(0,name.length-1).join(", ")+","
            var ed = name.slice(name.length-1,name.length)
            return `Hello, ${st} and ${ed}.`
        }
    }
    else if(name === name.toUpperCase()){
        return `HELLO ${name.toUpperCase()}!`
    }

    else return `Hello, ${name}.`

}

module.exports = greet