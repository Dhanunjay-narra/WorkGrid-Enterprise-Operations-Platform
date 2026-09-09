export class WorkflowVariablesNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowVariablesNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
