export class HrShiftCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for HrShift with args:", args);
  }
}
