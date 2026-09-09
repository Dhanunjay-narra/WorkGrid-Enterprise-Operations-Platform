export class PrjReleasePlanObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_projects_releaseplan_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
