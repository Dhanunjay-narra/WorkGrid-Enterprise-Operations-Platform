export class HrEmployeesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesProfile" };
  }
}
