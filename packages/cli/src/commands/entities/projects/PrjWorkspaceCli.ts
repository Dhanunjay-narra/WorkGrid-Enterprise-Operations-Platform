export class PrjWorkspaceCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for PrjWorkspace with args:", args);
  }
}
