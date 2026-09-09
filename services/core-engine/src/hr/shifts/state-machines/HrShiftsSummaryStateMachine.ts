export type HrShiftsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsSummaryStateMachine {
  private allowedTransitions: Record<HrShiftsSummaryState, HrShiftsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsSummaryState, to: HrShiftsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsSummaryState, to: HrShiftsSummaryState): HrShiftsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
