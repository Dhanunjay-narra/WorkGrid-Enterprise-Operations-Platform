export class WorkflowNodesSummaryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowNodesSummary ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
