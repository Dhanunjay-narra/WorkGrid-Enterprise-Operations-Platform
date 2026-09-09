export class HrEmployeeCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for HrEmployee with args:", args);
  }
}
