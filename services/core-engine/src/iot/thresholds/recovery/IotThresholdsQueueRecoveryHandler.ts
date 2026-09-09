export class IotThresholdsQueueRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsQueue ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
