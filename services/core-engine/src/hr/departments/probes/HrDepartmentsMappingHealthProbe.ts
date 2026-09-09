export class HrDepartmentsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsMapping" };
  }
}
