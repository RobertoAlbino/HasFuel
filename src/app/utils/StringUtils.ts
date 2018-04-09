export class StringUtils {
    public static isNullOrEmpty(palavra: string) {
        return (palavra === undefined || palavra === '' || palavra === null) ? true : false;
    }

    public static validarPreenchimentoCamposForm(campos: string[]) {
        let retorno = true;
        campos.forEach(elemento => {
            if (this.isNullOrEmpty(elemento))
                retorno = false;
        });
        
        return retorno;
    }
}