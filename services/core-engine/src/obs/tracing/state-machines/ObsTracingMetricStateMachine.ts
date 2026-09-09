export type ObsTracingMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingMetricStateMachine {
  private allowedTransitions: Record<ObsTracingMetricState, ObsTracingMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingMetricState, to: ObsTracingMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingMetricState, to: ObsTracingMetricState): ObsTracingMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingMetric: " + from + " -> " + to);
    }
    return to;
  }
}
