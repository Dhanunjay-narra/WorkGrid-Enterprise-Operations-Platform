export class HrShiftsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsBatch" };
  }
}
