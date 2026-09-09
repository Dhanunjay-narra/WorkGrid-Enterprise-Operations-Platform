export class HrShiftsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsNode" };
  }
}
