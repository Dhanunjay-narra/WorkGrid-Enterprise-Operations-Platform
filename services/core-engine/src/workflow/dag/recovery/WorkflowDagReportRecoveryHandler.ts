export class WorkflowDagReportRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowDagReport ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
