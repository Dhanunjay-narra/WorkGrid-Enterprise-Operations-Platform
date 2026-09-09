export class CrmHealthBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthBatch" };
  }
}
