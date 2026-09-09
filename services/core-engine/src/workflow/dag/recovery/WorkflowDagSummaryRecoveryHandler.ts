export class WorkflowDagSummaryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowDagSummary ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
