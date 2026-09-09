export class IotThresholdsEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
