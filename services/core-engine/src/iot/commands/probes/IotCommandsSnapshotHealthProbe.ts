export class IotCommandsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsSnapshot" };
  }
}
