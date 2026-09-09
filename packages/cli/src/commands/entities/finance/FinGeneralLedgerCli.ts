export class FinGeneralLedgerCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for FinGeneralLedger with args:", args);
  }
}
