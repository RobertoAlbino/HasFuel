export class StringUtils {
    public static isNullOrEmpty(palavra: string) {
        return (palavra === undefined || palavra === '' || palavra === null) ? true : false;
    }
}