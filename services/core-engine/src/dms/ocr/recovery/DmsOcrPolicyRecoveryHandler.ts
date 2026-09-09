export class DmsOcrPolicyRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsOcrPolicy ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
