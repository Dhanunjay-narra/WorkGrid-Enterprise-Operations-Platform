export class CommDirectMessageCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CommDirectMessage with args:", args);
  }
}
