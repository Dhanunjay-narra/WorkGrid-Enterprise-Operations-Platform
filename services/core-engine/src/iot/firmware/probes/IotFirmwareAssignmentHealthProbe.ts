export class IotFirmwareAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareAssignment" };
  }
}
