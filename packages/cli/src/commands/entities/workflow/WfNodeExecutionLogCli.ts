export class WfNodeExecutionLogCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for WfNodeExecutionLog with args:", args);
  }
}
