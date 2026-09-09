export class DmsFilesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesBatch" };
  }
}
