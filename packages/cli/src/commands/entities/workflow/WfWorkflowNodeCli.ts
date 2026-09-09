export class WfWorkflowNodeCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for WfWorkflowNode with args:", args);
  }
}
