export type HrEmployeesEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesEventStateMachine {
  private allowedTransitions: Record<HrEmployeesEventState, HrEmployeesEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesEventState, to: HrEmployeesEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesEventState, to: HrEmployeesEventState): HrEmployeesEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesEvent: " + from + " -> " + to);
    }
    return to;
  }
}
