export class CommChatMessageCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CommChatMessage with args:", args);
  }
}
