export type SecurityMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityMetricStateMachine {
  private allowedTransitions: Record<SecurityMetricState, SecurityMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityMetricState, to: SecurityMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityMetricState, to: SecurityMetricState): SecurityMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityMetric: " + from + " -> " + to);
    }
    return to;
  }
}
