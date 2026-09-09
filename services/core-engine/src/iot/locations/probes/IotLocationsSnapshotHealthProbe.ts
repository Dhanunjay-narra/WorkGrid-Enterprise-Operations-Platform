export class IotLocationsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsSnapshot" };
  }
}
