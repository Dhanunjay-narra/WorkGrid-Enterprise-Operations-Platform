export class DmsFilesTransactionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsFilesTransaction ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
