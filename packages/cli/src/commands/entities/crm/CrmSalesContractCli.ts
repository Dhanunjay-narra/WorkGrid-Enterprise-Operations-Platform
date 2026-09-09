export class CrmSalesContractCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CrmSalesContract with args:", args);
  }
}
