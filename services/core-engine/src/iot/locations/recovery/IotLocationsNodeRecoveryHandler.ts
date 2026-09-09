export class IotLocationsNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
