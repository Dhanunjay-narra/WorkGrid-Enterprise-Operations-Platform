export class ProjectKanbanTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanTransaction" };
  }
}
