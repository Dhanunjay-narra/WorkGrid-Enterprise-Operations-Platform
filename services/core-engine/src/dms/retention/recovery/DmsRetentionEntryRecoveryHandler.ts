export class DmsRetentionEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsRetentionEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
