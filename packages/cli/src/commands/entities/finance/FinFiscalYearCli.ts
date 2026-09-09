export class FinFiscalYearCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for FinFiscalYear with args:", args);
  }
}
