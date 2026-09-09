export type IntRateLimitsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsSummaryStateMachine {
  private allowedTransitions: Record<IntRateLimitsSummaryState, IntRateLimitsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsSummaryState, to: IntRateLimitsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsSummaryState, to: IntRateLimitsSummaryState): IntRateLimitsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
