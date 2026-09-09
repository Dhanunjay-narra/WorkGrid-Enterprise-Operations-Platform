export class WfApprovalDecisionCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for WfApprovalDecision with args:", args);
  }
}
