export class IntWebhookEventLogCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IntWebhookEventLog with args:", args);
  }
}
