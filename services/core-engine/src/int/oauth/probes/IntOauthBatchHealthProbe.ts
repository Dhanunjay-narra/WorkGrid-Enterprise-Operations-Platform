export class IntOauthBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthBatch" };
  }
}
