export class HrJobPostingCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for HrJobPosting with args:", args);
  }
}
