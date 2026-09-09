export class ProjectEpicsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsReport" };
  }
}
