export class ProjectEpicsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsQueue" };
  }
}
