export class SupportSlaNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaNode" };
  }
}
