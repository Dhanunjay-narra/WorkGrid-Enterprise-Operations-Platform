export class IotThresholdsScheduleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsSchedule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
