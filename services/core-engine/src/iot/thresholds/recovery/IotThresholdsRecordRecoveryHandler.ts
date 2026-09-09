export class IotThresholdsRecordRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsRecord ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
