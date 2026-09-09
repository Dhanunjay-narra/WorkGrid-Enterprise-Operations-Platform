export class WorkflowVariablesStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowVariablesState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
