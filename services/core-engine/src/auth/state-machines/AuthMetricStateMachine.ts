export type AuthMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthMetricStateMachine {
  private allowedTransitions: Record<AuthMetricState, AuthMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthMetricState, to: AuthMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthMetricState, to: AuthMetricState): AuthMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthMetric: " + from + " -> " + to);
    }
    return to;
  }
}
