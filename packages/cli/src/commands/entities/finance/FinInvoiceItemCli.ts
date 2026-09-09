export class FinInvoiceItemCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for FinInvoiceItem with args:", args);
  }
}
