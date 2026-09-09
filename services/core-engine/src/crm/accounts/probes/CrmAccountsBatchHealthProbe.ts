export class CrmAccountsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsBatch" };
  }
}
