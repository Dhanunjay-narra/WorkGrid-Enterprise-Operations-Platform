export class IntProviderRateLimitCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IntProviderRateLimit with args:", args);
  }
}
