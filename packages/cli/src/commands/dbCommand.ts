export class DbCommand {
  public static async execute(args: string[]): Promise<void> {
    console.log(`[CLI] Executing db with arguments:`, args);
  }
}
