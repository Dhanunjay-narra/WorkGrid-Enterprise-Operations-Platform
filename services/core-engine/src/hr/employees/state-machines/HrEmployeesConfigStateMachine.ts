export type HrEmployeesConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesConfigStateMachine {
  private allowedTransitions: Record<HrEmployeesConfigState, HrEmployeesConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesConfigState, to: HrEmployeesConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesConfigState, to: HrEmployeesConfigState): HrEmployeesConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesConfig: " + from + " -> " + to);
    }
    return to;
  }
}
