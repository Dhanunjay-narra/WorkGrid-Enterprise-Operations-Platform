export class SupportCsatPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatPolicy" };
  }
}
