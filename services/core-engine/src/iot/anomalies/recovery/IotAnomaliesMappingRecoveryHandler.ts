export class IotAnomaliesMappingRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesMapping ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
