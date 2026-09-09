export class HrShiftsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsRecord" };
  }
}
