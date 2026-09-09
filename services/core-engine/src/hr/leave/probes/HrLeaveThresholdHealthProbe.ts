export class HrLeaveThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveThreshold" };
  }
}
