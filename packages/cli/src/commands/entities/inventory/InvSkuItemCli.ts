export class InvSkuItemCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for InvSkuItem with args:", args);
  }
}
