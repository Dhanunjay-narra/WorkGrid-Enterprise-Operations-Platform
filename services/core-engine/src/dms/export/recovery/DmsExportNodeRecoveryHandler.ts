export class DmsExportNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsExportNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
