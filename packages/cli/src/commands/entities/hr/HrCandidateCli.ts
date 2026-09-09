export class HrCandidateCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for HrCandidate with args:", args);
  }
}
