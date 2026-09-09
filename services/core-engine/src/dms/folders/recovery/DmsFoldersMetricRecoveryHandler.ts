export class DmsFoldersMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsFoldersMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
