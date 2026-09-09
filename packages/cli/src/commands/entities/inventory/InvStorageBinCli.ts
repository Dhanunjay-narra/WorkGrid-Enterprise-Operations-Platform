export class InvStorageBinCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for InvStorageBin with args:", args);
  }
}
