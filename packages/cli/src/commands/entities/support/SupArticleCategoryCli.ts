export class SupArticleCategoryCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for SupArticleCategory with args:", args);
  }
}
