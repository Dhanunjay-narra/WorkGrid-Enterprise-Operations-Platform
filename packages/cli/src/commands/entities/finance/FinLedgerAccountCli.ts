export class FinLedgerAccountCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for FinLedgerAccount with args:", args);
  }
}
