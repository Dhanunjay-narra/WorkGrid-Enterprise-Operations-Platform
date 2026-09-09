export class SupEscalationRuleCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for SupEscalationRule with args:", args);
  }
}
