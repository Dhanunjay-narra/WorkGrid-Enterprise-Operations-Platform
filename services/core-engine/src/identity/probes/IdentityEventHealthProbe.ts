export class IdentityEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityEvent" };
  }
}
