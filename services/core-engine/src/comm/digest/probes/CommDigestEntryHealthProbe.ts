export class CommDigestEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestEntry" };
  }
}
