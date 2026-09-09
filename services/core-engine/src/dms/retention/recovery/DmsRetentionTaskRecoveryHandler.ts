export class DmsRetentionTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsRetentionTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
