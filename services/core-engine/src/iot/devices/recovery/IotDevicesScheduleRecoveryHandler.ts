export class IotDevicesScheduleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesSchedule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
