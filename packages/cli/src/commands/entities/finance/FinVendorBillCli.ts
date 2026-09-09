export class FinVendorBillCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for FinVendorBill with args:", args);
  }
}
