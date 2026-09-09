export class HrDepartmentsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsPolicy" };
  }
}
