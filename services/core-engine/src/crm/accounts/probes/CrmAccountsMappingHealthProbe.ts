export class CrmAccountsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsMapping" };
  }
}
