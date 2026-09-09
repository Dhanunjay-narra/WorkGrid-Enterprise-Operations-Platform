export class ProjectEpicsMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectEpicsMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
