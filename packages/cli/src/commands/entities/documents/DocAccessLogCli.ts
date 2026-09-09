export class DocAccessLogCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for DocAccessLog with args:", args);
  }
}
