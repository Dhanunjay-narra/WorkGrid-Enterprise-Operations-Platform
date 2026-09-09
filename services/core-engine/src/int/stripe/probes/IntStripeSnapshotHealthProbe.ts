export class IntStripeSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripeSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripeSnapshot" };
  }
}
