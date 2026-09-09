export type HrEmployeesItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesItemStateMachine {
  private allowedTransitions: Record<HrEmployeesItemState, HrEmployeesItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesItemState, to: HrEmployeesItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesItemState, to: HrEmployeesItemState): HrEmployeesItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesItem: " + from + " -> " + to);
    }
    return to;
  }
}
