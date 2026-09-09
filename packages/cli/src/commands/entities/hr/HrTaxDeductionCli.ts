export class HrTaxDeductionCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for HrTaxDeduction with args:", args);
  }
}
