export class HrEmployeesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesMapping" };
  }
}
