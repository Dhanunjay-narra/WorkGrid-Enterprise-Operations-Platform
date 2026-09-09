export class ProjectEpicsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsSession" };
  }
}
