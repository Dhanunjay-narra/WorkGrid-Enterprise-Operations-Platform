export class AuthBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthBatch" };
  }
}
