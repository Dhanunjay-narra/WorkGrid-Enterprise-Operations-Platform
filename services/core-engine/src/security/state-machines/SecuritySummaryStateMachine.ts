export type SecuritySummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecuritySummaryStateMachine {
  private allowedTransitions: Record<SecuritySummaryState, SecuritySummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecuritySummaryState, to: SecuritySummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecuritySummaryState, to: SecuritySummaryState): SecuritySummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecuritySummary: " + from + " -> " + to);
    }
    return to;
  }
}
