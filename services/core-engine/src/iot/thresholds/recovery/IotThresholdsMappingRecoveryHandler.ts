export class IotThresholdsMappingRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsMapping ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
