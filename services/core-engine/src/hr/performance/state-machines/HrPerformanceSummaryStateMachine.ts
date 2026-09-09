export type HrPerformanceSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceSummaryStateMachine {
  private allowedTransitions: Record<HrPerformanceSummaryState, HrPerformanceSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceSummaryState, to: HrPerformanceSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceSummaryState, to: HrPerformanceSummaryState): HrPerformanceSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceSummary: " + from + " -> " + to);
    }
    return to;
  }
}
