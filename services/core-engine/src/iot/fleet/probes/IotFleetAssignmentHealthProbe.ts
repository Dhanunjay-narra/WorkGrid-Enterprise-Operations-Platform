export class IotFleetAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetAssignment" };
  }
}
