export type CommDigestMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestMetricStateMachine {
  private allowedTransitions: Record<CommDigestMetricState, CommDigestMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestMetricState, to: CommDigestMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestMetricState, to: CommDigestMetricState): CommDigestMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestMetric: " + from + " -> " + to);
    }
    return to;
  }
}
