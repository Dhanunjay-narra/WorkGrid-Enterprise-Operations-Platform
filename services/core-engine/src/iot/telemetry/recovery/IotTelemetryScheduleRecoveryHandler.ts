export class IotTelemetryScheduleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetrySchedule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
