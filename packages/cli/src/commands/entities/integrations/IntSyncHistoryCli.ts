export class IntSyncHistoryCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IntSyncHistory with args:", args);
  }
}
