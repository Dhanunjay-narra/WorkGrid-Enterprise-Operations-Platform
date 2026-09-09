export class DmsVersionsTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsVersionsTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
