export class InvWarehouseCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for InvWarehouse with args:", args);
  }
}
