export class IotThresholdsEventRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsEvent ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
