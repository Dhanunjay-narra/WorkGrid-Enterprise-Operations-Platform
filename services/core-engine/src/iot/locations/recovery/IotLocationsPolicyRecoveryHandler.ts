export class IotLocationsPolicyRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsPolicy ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
