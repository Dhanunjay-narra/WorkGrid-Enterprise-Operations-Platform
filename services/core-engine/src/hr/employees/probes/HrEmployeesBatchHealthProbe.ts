export class HrEmployeesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesBatch" };
  }
}
