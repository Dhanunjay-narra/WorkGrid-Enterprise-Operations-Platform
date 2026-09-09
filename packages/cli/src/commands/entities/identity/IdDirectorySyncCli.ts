export class IdDirectorySyncCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IdDirectorySync with args:", args);
  }
}
