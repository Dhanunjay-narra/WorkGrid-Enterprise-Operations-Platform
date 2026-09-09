export class FinExpenseReceiptCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for FinExpenseReceipt with args:", args);
  }
}
