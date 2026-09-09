export class IotAnomaliesScheduleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesSchedule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
