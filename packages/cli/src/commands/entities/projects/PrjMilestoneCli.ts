export class PrjMilestoneCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for PrjMilestone with args:", args);
  }
}
