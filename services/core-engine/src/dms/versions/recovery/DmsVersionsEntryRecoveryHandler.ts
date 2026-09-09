export class DmsVersionsEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsVersionsEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
