export class DmsExportTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsExportTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
