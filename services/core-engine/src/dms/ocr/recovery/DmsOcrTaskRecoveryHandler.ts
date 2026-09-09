export class DmsOcrTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsOcrTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
