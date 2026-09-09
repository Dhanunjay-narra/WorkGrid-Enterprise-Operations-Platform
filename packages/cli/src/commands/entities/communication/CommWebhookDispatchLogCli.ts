export class CommWebhookDispatchLogCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CommWebhookDispatchLog with args:", args);
  }
}
