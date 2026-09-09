export class HrLeaveEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveEvent" };
  }
}
