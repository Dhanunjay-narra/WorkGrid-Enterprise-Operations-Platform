export class InvPurchaseOrderCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for InvPurchaseOrder with args:", args);
  }
}
