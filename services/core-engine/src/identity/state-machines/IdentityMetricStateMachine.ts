export type IdentityMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityMetricStateMachine {
  private allowedTransitions: Record<IdentityMetricState, IdentityMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityMetricState, to: IdentityMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityMetricState, to: IdentityMetricState): IdentityMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityMetric: " + from + " -> " + to);
    }
    return to;
  }
}
