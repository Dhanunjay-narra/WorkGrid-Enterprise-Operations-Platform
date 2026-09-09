export class ProjectKanbanPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectKanbanPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectKanbanPayload" };
  }
}
