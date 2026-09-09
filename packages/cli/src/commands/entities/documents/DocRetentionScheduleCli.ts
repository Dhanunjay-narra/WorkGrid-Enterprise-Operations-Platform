export class DocRetentionScheduleCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for DocRetentionSchedule with args:", args);
  }
}
