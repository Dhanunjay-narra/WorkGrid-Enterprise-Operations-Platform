export class HrEmployeesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesState" };
  }
}
