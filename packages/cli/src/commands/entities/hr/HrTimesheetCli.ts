export class HrTimesheetCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for HrTimesheet with args:", args);
  }
}
