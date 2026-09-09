export class DocFolderCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for DocFolder with args:", args);
  }
}
