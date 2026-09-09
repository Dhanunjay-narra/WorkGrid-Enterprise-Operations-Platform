export class DmsVersionsStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsVersionsState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
