export class SecRateLimitCounterCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for SecRateLimitCounter with args:", args);
  }
}
