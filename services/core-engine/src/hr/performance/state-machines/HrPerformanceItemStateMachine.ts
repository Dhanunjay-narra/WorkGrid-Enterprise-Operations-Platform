export type HrPerformanceItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceItemStateMachine {
  private allowedTransitions: Record<HrPerformanceItemState, HrPerformanceItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceItemState, to: HrPerformanceItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceItemState, to: HrPerformanceItemState): HrPerformanceItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceItem: " + from + " -> " + to);
    }
    return to;
  }
}
