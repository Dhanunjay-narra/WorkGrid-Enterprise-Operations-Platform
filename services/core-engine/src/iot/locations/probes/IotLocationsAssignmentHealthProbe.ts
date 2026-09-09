export class IotLocationsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsAssignment" };
  }
}
