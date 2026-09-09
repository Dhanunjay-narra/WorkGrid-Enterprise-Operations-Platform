export class WfVariableStoreCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for WfVariableStore with args:", args);
  }
}
