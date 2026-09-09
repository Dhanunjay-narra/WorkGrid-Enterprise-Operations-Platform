export class PrjRiskItemCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for PrjRiskItem with args:", args);
  }
}
