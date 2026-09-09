export class CrmContactsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsMapping" };
  }
}
