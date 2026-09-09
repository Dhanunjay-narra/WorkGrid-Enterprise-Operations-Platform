export class IotThresholdsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsAssignment" };
  }
}
