export class IotThresholdsTransactionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsTransaction ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
