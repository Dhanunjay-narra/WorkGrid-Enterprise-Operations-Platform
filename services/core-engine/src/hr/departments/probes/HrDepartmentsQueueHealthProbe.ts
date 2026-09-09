export class HrDepartmentsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsQueue" };
  }
}
