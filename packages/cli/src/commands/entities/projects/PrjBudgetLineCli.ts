export class PrjBudgetLineCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for PrjBudgetLine with args:", args);
  }
}
