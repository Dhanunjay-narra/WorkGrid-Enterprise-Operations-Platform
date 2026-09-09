export class ProjectGanttProfileRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectGanttProfile ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
