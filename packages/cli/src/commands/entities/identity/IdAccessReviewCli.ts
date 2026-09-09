export class IdAccessReviewCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IdAccessReview with args:", args);
  }
}
