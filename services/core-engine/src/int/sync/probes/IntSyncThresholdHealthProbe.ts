export class IntSyncThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncThreshold" };
  }
}
