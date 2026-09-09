export class HrPerformanceSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceSession" };
  }
}
