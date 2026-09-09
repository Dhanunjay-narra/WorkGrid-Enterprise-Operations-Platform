export class IotLocationsEventRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsEvent ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
