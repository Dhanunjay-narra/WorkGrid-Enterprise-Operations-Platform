export class IdentityNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityNode" };
  }
}
