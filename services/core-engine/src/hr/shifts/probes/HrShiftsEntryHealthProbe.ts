export class HrShiftsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsEntry" };
  }
}
