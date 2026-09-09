export class ProjectEpicsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsItem" };
  }
}
