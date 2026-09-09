export type IntRateLimitsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsBatchStateMachine {
  private allowedTransitions: Record<IntRateLimitsBatchState, IntRateLimitsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsBatchState, to: IntRateLimitsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsBatchState, to: IntRateLimitsBatchState): IntRateLimitsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
