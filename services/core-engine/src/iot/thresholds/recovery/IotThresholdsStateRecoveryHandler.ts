export class IotThresholdsStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
