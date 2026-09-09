export class ProjectGanttPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttPolicy" };
  }
}
