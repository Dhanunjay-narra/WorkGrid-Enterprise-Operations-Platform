export class HrDepartmentCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for HrDepartment with args:", args);
  }
}
