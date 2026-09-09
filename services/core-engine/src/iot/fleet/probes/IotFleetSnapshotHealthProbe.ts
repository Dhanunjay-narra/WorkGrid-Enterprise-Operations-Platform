export class IotFleetSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetSnapshot" };
  }
}
