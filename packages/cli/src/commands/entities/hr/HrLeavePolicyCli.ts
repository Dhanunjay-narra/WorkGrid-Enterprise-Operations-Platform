export class HrLeavePolicyCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for HrLeavePolicy with args:", args);
  }
}
