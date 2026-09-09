export class HrLeaveStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveState" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveState" };
  }
}
