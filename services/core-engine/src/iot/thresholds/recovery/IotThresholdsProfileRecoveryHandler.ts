export class IotThresholdsProfileRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsProfile ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
