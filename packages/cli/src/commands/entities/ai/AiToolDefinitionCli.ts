export class AiToolDefinitionCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for AiToolDefinition with args:", args);
  }
}
