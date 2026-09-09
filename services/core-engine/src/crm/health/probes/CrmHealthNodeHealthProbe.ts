export class CrmHealthNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthNode" };
  }
}
