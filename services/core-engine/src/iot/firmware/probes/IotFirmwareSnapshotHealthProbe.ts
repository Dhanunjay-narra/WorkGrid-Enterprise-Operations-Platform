export class IotFirmwareSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareSnapshot" };
  }
}
