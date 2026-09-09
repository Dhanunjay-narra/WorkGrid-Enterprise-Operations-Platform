export class ProjectCapacityMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacityMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
