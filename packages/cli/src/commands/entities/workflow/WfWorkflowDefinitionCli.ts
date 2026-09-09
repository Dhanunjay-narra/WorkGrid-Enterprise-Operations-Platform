export class WfWorkflowDefinitionCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for WfWorkflowDefinition with args:", args);
  }
}
