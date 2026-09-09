export class PrjIssueReportCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for PrjIssueReport with args:", args);
  }
}
