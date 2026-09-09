export class SupportAgentsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsSession" };
  }
}
