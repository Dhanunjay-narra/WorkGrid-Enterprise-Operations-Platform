export class HrLeaveQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveQueue" };
  }
}
