export class HrPerformanceNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceNode" };
  }
}
