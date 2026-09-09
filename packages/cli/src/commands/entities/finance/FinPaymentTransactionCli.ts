export class FinPaymentTransactionCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for FinPaymentTransaction with args:", args);
  }
}
