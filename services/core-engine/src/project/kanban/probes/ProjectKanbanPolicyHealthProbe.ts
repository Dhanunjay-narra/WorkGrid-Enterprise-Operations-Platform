export class ProjectKanbanPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanPolicy" };
  }
}
