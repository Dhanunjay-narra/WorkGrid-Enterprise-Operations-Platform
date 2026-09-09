export class CrmMeetingCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CrmMeeting with args:", args);
  }
}
