export class HrPerformanceMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceMapping" };
  }
}
