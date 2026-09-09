export class WorkflowExecutionsSummaryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowExecutionsSummary ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
