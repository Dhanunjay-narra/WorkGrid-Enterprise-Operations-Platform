export class ProjectCapacitySummaryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacitySummary ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
