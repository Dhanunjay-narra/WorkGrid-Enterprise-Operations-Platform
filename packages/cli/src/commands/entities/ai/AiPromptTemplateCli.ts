export class AiPromptTemplateCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for AiPromptTemplate with args:", args);
  }
}
