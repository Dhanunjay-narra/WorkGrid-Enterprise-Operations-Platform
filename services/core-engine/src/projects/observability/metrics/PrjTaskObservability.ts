export class PrjTaskObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_projects_task_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
