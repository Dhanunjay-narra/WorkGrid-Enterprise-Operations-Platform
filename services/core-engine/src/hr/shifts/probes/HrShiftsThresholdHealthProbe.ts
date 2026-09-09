export class HrShiftsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsThreshold" };
  }
}
