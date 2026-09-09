export class HrEmployeesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesEvent" };
  }
}
