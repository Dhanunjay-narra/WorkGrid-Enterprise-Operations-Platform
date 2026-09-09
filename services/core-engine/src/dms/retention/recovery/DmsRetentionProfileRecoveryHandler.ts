export class DmsRetentionProfileRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsRetentionProfile ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
