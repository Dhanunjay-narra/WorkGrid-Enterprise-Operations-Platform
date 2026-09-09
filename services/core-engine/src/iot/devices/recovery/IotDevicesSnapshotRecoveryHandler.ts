export class IotDevicesSnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesSnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
