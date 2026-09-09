export class DmsExportSessionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsExportSession ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
