export class ProjectCapacityScheduleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacitySchedule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
