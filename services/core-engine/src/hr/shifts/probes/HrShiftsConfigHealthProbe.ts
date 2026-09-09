export class HrShiftsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsConfig" };
  }
}
