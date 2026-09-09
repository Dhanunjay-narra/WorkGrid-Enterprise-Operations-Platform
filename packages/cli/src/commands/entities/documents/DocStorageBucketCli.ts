export class DocStorageBucketCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for DocStorageBucket with args:", args);
  }
}
