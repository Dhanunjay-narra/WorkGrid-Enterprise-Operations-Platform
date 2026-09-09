export class IntWebhookSubscriptionCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IntWebhookSubscription with args:", args);
  }
}
