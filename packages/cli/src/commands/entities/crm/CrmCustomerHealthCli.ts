export class CrmCustomerHealthCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CrmCustomerHealth with args:", args);
  }
}
