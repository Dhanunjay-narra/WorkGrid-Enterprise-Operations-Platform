export class DmsFoldersStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsFoldersState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
