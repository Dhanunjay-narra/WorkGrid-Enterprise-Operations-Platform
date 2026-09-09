export type HrEmployeesProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesProfileStateMachine {
  private allowedTransitions: Record<HrEmployeesProfileState, HrEmployeesProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesProfileState, to: HrEmployeesProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesProfileState, to: HrEmployeesProfileState): HrEmployeesProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesProfile: " + from + " -> " + to);
    }
    return to;
  }
}
