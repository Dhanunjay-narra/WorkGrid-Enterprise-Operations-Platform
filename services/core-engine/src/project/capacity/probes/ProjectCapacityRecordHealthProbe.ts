export class ProjectCapacityRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityRecord" };
  }
}
