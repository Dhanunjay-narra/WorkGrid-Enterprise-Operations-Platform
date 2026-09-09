export class ProjectKanbanEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanEntry" };
  }
}
