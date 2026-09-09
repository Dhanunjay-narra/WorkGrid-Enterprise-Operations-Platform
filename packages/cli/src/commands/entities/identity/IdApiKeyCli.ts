export class IdApiKeyCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IdApiKey with args:", args);
  }
}
