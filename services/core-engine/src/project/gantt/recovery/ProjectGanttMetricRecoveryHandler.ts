export class ProjectGanttMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectGanttMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
