export class SecurityNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityNode" };
  }
}
