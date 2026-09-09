export class DmsOcrConfigRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsOcrConfig ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
