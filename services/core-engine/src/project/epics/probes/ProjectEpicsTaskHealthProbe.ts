export class ProjectEpicsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsTask" };
  }
}
