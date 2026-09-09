export class ProjectEpicsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsEntry" };
  }
}
