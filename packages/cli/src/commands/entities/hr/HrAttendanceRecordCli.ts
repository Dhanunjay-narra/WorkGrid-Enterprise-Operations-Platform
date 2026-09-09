export class HrAttendanceRecordCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for HrAttendanceRecord with args:", args);
  }
}
