export class IotAnomaliesAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesAssignment" };
  }
}
