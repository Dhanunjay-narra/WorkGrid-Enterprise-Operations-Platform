export class InvTransferOrderCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for InvTransferOrder with args:", args);
  }
}
