export class InvSupplierCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for InvSupplier with args:", args);
  }
}
