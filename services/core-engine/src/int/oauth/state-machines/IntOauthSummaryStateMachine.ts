export type IntOauthSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthSummaryStateMachine {
  private allowedTransitions: Record<IntOauthSummaryState, IntOauthSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthSummaryState, to: IntOauthSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthSummaryState, to: IntOauthSummaryState): IntOauthSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthSummary: " + from + " -> " + to);
    }
    return to;
  }
}
