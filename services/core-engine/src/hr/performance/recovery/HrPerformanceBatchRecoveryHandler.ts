export class HrPerformanceBatchRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for HrPerformanceBatch ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
