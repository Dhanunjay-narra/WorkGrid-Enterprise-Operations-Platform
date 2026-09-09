export class SupSupportAgentCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for SupSupportAgent with args:", args);
  }
}
