export type HrLeaveSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveSummaryStateMachine {
  private allowedTransitions: Record<HrLeaveSummaryState, HrLeaveSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveSummaryState, to: HrLeaveSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveSummaryState, to: HrLeaveSummaryState): HrLeaveSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveSummary: " + from + " -> " + to);
    }
    return to;
  }
}
