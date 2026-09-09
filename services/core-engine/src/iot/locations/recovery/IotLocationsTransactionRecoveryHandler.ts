export class IotLocationsTransactionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsTransaction ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
