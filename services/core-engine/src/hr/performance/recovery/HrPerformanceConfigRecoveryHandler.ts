export class HrPerformanceConfigRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for HrPerformanceConfig ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
