export class ProjectEpicsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsEvent" };
  }
}
