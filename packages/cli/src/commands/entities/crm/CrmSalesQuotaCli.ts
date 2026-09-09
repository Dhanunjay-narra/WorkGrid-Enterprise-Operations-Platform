export class CrmSalesQuotaCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CrmSalesQuota with args:", args);
  }
}
