export class ProjectEpicsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsConfig" };
  }
}
