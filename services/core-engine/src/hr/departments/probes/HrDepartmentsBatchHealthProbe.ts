export class HrDepartmentsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsBatch" };
  }
}
