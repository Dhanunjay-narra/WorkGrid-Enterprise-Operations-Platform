export class PrjTaskCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for PrjTask with args:", args);
  }
}
