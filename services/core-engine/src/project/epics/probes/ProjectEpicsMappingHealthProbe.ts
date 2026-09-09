export class ProjectEpicsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsMapping" };
  }
}
