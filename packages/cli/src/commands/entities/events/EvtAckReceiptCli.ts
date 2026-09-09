export class EvtAckReceiptCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for EvtAckReceipt with args:", args);
  }
}
