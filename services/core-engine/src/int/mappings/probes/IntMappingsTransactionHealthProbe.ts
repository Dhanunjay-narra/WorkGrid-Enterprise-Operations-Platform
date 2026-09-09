export class IntMappingsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsTransaction" };
  }
}
