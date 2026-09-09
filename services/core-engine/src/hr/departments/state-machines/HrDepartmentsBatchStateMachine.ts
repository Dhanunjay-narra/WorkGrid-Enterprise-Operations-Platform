export type HrDepartmentsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsBatchStateMachine {
  private allowedTransitions: Record<HrDepartmentsBatchState, HrDepartmentsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsBatchState, to: HrDepartmentsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsBatchState, to: HrDepartmentsBatchState): HrDepartmentsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
