export class IotDevicesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesSnapshot" };
  }
}
