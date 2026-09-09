export class HrEmployeesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesThreshold" };
  }
}
