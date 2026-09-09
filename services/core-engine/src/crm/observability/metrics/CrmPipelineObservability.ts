export class CrmPipelineObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_crm_pipeline_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
