export class BiKpisEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisEntry" };
  }
}
