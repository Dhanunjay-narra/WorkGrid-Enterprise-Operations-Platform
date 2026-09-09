export type HrEmployeesStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesStateStateMachine {
  private allowedTransitions: Record<HrEmployeesStateState, HrEmployeesStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesStateState, to: HrEmployeesStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesStateState, to: HrEmployeesStateState): HrEmployeesStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesState: " + from + " -> " + to);
    }
    return to;
  }
}
