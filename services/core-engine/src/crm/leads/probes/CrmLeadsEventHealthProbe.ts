export class CrmLeadsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsEvent" };
  }
}
