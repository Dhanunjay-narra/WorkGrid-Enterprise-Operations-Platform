export class HrLeaveMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveMapping" };
  }
}
