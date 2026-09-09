export type IntRateLimitsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsRecordStateMachine {
  private allowedTransitions: Record<IntRateLimitsRecordState, IntRateLimitsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsRecordState, to: IntRateLimitsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsRecordState, to: IntRateLimitsRecordState): IntRateLimitsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
