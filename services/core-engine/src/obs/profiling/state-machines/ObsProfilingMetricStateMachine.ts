export type ObsProfilingMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingMetricStateMachine {
  private allowedTransitions: Record<ObsProfilingMetricState, ObsProfilingMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingMetricState, to: ObsProfilingMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingMetricState, to: ObsProfilingMetricState): ObsProfilingMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingMetric: " + from + " -> " + to);
    }
    return to;
  }
}
