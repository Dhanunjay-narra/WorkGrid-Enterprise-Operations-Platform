export class WfEventTriggerObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_workflow_eventtrigger_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
