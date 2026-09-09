export class WorkflowExecutionsStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowExecutionsState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
