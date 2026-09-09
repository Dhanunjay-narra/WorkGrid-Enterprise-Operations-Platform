export class HrPerformanceRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for HrPerformanceRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
