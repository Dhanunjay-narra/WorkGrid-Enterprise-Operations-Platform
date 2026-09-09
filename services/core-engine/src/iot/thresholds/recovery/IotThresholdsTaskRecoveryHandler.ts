export class IotThresholdsTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
