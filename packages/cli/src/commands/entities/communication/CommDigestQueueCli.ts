export class CommDigestQueueCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CommDigestQueue with args:", args);
  }
}
