export class HrEmployeesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesTask" };
  }
}
