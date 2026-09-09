export class HrLeaveRequestCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for HrLeaveRequest with args:", args);
  }
}
