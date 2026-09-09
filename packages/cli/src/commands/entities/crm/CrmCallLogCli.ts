export class CrmCallLogCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CrmCallLog with args:", args);
  }
}
