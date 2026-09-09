export class WfEventTriggerCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for WfEventTrigger with args:", args);
  }
}
