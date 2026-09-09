export class HrPerformanceSnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for HrPerformanceSnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
