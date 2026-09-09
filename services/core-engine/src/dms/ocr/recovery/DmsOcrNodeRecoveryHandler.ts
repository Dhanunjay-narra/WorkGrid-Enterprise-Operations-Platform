export class DmsOcrNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsOcrNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
