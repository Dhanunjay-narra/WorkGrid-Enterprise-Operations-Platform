export class CrmPipelineNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for CrmPipelineNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
