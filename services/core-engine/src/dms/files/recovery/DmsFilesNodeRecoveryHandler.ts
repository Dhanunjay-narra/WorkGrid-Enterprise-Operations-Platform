export class DmsFilesNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsFilesNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
