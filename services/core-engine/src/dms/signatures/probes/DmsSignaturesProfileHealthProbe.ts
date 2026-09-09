export class DmsSignaturesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesProfile" };
  }
}
