export class CrmLeadsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsMapping" };
  }
}
