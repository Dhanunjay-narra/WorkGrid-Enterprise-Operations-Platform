export class WfCronScheduleCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for WfCronSchedule with args:", args);
  }
}
