export class CommTypingStateCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CommTypingState with args:", args);
  }
}
