export class PrjWorkspaceObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_projects_workspace_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
