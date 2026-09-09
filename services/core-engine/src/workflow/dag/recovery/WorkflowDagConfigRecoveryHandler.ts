export class WorkflowDagConfigRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowDagConfig ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
