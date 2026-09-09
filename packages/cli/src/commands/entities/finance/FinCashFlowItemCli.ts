export class FinCashFlowItemCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for FinCashFlowItem with args:", args);
  }
}
