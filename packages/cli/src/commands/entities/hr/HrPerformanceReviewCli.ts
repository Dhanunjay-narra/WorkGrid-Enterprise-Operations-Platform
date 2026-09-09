export class HrPerformanceReviewCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for HrPerformanceReview with args:", args);
  }
}
