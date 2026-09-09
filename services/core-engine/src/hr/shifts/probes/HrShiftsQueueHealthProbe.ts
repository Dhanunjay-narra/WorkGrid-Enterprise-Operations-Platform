export class HrShiftsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsQueue" };
  }
}
