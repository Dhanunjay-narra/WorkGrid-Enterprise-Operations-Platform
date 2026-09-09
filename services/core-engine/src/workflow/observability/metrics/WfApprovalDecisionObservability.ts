export class WfApprovalDecisionObservability {
  public static recordLatency(endpoint: string, durationMs: number): void {
    console.log("[METRICS-HISTOGRAM] nexora_workflow_approvaldecision_latency_seconds_bucket{le=\"0.1\"} " + durationMs);
  }
}
