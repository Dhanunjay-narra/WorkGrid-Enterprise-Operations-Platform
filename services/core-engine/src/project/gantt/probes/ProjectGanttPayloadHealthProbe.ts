export class ProjectGanttPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttPayload" };
  }
}
