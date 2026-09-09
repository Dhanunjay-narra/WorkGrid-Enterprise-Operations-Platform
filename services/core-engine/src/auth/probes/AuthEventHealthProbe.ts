export class AuthEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthEvent" };
  }
}
