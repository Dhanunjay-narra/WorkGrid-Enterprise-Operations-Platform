export type IntRateLimitsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsReportStateMachine {
  private allowedTransitions: Record<IntRateLimitsReportState, IntRateLimitsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsReportState, to: IntRateLimitsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsReportState, to: IntRateLimitsReportState): IntRateLimitsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsReport: " + from + " -> " + to);
    }
    return to;
  }
}
