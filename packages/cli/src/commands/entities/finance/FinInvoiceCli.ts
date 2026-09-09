export class FinInvoiceCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for FinInvoice with args:", args);
  }
}
