export class HrOnboardingChecklistCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for HrOnboardingChecklist with args:", args);
  }
}
