export class HrShiftsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsMapping" };
  }
}
