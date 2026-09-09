export class WfWorkflowExecutionCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for WfWorkflowExecution with args:", args);
  }
}
