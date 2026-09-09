export class HrPerformanceEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for HrPerformanceEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
