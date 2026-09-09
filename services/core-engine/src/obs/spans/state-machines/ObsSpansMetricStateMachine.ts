export type ObsSpansMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansMetricStateMachine {
  private allowedTransitions: Record<ObsSpansMetricState, ObsSpansMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansMetricState, to: ObsSpansMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansMetricState, to: ObsSpansMetricState): ObsSpansMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansMetric: " + from + " -> " + to);
    }
    return to;
  }
}
