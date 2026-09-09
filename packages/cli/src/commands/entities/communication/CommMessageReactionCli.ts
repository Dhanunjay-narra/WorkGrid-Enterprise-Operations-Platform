export class CommMessageReactionCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CommMessageReaction with args:", args);
  }
}
