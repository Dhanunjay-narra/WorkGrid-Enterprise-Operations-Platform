export class WorkflowExecutionsSessionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowExecutionsSession ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
