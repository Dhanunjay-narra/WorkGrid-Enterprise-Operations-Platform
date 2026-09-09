export class IntSyncQueueItemCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IntSyncQueueItem with args:", args);
  }
}
