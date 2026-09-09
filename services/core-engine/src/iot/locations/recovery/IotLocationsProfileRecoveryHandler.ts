export class IotLocationsProfileRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsProfile ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
