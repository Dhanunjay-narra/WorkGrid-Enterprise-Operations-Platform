export class FinanceCommand {
  public static async execute(args: string[]): Promise<void> {
    console.log(`[CLI] Executing finance with arguments:`, args);
  }
}
