export class SupQueueCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for SupQueue with args:", args);
  }
}
