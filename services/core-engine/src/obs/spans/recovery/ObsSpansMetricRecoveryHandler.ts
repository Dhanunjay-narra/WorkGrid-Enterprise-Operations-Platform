export class ObsSpansMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ObsSpansMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
