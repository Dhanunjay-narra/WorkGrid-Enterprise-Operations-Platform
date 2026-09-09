export class BiReportQueryCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for BiReportQuery with args:", args);
  }
}
