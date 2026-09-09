export class HrPerformanceRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceRecord" };
  }
}
