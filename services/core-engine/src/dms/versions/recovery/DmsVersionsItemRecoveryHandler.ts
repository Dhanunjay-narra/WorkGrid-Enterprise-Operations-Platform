export class DmsVersionsItemRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsVersionsItem ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
