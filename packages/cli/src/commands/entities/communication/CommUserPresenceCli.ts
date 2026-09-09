export class CommUserPresenceCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CommUserPresence with args:", args);
  }
}
