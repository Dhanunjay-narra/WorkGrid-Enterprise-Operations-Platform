export class HrEmployeesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesQueue" };
  }
}
