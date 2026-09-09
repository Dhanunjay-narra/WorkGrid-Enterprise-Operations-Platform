export type HrEmployeesBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesBatchStateMachine {
  private allowedTransitions: Record<HrEmployeesBatchState, HrEmployeesBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesBatchState, to: HrEmployeesBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesBatchState, to: HrEmployeesBatchState): HrEmployeesBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesBatch: " + from + " -> " + to);
    }
    return to;
  }
}
