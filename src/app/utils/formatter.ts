export class Formatter {
  public static formatarData(data: Date): string {
    return new Intl.DateTimeFormat().format(data);
  }
}
