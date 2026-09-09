export class SecurityEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityEvent" };
  }
}
