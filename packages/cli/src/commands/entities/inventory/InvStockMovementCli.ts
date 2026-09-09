export class InvStockMovementCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for InvStockMovement with args:", args);
  }
}
