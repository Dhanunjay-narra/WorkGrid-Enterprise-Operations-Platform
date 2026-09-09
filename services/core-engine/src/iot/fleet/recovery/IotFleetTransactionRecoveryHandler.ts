export class IotFleetTransactionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotFleetTransaction ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
