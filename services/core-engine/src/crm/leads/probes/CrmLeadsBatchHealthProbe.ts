export class CrmLeadsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsBatch" };
  }
}
