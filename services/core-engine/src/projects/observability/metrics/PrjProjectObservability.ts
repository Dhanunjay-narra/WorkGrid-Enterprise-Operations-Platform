export class PrjProjectObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_projects_project_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
