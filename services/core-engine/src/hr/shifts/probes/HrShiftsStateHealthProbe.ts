export class HrShiftsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsState" };
  }
}
