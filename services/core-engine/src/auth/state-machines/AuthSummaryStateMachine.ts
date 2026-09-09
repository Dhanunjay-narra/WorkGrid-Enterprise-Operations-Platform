export type AuthSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthSummaryStateMachine {
  private allowedTransitions: Record<AuthSummaryState, AuthSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthSummaryState, to: AuthSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthSummaryState, to: AuthSummaryState): AuthSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthSummary: " + from + " -> " + to);
    }
    return to;
  }
}
