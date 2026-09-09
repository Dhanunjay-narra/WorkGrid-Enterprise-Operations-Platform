export class SupportSlaTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaTransaction" };
  }
}
