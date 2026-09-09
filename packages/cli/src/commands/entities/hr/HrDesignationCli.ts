export class HrDesignationCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for HrDesignation with args:", args);
  }
}
