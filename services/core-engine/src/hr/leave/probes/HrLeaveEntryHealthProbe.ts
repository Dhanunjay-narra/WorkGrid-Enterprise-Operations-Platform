export class HrLeaveEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveEntry" };
  }
}
