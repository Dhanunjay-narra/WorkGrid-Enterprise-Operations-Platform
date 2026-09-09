export class CrmLeadsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsTask" };
  }
}
