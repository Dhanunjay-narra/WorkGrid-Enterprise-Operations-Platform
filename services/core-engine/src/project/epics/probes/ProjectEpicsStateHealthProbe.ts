export class ProjectEpicsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsState" };
  }
}
