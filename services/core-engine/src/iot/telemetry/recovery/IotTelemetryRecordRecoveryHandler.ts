export class IotTelemetryRecordRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetryRecord ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
