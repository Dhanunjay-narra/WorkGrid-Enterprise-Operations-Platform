export type HrShiftsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsBatchStateMachine {
  private allowedTransitions: Record<HrShiftsBatchState, HrShiftsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsBatchState, to: HrShiftsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsBatchState, to: HrShiftsBatchState): HrShiftsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
