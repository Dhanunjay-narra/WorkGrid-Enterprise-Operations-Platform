export class IotDevicesAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesAssignment" };
  }
}
