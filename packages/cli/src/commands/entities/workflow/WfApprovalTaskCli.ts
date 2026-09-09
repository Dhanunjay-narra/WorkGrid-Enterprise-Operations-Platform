export class WfApprovalTaskCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for WfApprovalTask with args:", args);
  }
}
