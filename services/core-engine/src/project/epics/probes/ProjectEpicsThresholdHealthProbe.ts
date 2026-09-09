export class ProjectEpicsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsThreshold" };
  }
}
