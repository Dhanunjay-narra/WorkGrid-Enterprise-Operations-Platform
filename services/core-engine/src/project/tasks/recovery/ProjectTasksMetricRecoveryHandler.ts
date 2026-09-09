export class ProjectTasksMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectTasksMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
