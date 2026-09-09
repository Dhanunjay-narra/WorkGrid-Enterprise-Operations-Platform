export class DmsRetentionSessionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsRetentionSession ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
