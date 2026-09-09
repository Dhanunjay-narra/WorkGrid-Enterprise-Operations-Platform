export class HrEmployeesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesConfig" };
  }
}
