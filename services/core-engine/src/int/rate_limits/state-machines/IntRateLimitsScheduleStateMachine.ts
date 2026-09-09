export type IntRateLimitsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsScheduleStateMachine {
  private allowedTransitions: Record<IntRateLimitsScheduleState, IntRateLimitsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsScheduleState, to: IntRateLimitsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsScheduleState, to: IntRateLimitsScheduleState): IntRateLimitsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
