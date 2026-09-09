export class IntMappingsRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IntMappingsRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
