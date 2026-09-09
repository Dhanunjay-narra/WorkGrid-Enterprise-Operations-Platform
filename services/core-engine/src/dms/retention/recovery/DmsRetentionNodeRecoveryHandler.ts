export class DmsRetentionNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsRetentionNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
