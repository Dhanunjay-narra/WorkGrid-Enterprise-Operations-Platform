export class IdRoleObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_identity_role_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
