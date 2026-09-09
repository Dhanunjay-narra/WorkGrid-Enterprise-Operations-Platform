export class IntMappingsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsSnapshot" };
  }
}
