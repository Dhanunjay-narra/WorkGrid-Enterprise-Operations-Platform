export class CommMessagesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesMapping" };
  }
}
