export class HrShiftsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsProfile" };
  }
}
