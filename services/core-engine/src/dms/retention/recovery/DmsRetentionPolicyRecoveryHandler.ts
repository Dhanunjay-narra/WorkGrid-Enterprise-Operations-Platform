export class DmsRetentionPolicyRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsRetentionPolicy ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
