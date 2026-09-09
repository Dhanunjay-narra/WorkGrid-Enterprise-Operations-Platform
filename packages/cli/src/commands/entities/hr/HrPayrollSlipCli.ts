export class HrPayrollSlipCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for HrPayrollSlip with args:", args);
  }
}
