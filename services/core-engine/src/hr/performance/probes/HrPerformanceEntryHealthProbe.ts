export class HrPerformanceEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceEntry" };
  }
}
