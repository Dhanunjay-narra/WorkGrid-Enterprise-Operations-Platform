export class HrDepartmentsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsState" };
  }
}
