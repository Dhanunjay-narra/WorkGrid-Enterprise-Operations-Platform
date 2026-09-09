export class SecComplianceReportCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for SecComplianceReport with args:", args);
  }
}
