export class DocChunkIndexCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for DocChunkIndex with args:", args);
  }
}
