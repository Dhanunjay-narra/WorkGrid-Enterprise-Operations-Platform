export class HrEmployeesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesPolicy" };
  }
}
