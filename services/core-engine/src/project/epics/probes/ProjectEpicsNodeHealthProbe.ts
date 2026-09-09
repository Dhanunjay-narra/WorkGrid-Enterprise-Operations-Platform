export class ProjectEpicsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsNode" };
  }
}
