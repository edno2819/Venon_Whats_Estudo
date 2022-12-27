export function text_format(msg){
    msg = msg.replace(/\s+/g, ' ').trim()
    msg = msg.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return msg.toLowerCase();
}


export function error_default(msg){
    console.log('Erro no evento')
}

export function sucesso_default(msg){
    console.log('Sucesso no evento')
}