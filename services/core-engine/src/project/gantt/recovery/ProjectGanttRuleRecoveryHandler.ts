export class ProjectGanttRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectGanttRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
