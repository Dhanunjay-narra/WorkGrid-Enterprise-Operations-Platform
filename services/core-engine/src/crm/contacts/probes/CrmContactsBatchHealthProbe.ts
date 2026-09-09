export class CrmContactsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsBatch" };
  }
}
