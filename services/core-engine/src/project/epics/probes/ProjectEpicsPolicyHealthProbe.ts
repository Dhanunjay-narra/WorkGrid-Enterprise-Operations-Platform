export class ProjectEpicsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsPolicy" };
  }
}
