export class IdDirectorySyncObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_identity_directorysync_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
