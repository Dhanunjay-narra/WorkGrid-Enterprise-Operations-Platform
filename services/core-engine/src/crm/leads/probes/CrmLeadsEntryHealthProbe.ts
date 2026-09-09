export class CrmLeadsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsEntry" };
  }
}
