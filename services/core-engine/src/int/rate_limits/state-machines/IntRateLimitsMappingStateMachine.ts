export type IntRateLimitsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsMappingStateMachine {
  private allowedTransitions: Record<IntRateLimitsMappingState, IntRateLimitsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsMappingState, to: IntRateLimitsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsMappingState, to: IntRateLimitsMappingState): IntRateLimitsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
