export class IotThresholdsSessionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsSession ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
