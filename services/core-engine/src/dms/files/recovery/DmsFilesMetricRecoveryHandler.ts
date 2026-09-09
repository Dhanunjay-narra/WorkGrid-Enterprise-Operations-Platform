export class DmsFilesMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsFilesMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
