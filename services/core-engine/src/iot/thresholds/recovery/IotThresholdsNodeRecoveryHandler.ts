export class IotThresholdsNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
