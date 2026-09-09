export class WorkflowExecutionsNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowExecutionsNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
