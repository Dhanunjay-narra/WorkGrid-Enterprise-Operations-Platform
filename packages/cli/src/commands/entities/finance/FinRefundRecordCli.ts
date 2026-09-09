export class FinRefundRecordCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for FinRefundRecord with args:", args);
  }
}
