export class SecPiiMaskingRuleCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for SecPiiMaskingRule with args:", args);
  }
}
