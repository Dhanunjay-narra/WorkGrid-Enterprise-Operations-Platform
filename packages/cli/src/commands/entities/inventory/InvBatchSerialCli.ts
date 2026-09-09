export class InvBatchSerialCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for InvBatchSerial with args:", args);
  }
}
