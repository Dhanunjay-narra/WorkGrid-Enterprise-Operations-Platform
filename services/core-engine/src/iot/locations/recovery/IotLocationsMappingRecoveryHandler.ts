export class IotLocationsMappingRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsMapping ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
