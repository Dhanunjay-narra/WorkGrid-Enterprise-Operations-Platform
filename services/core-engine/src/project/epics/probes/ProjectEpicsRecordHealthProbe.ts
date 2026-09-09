export class ProjectEpicsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectEpicsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectEpicsRecord" };
  }
}
