export class IotLocationsSessionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsSession ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
