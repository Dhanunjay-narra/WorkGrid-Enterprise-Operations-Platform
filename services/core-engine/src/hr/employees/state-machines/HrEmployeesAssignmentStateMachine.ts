export type HrEmployeesAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesAssignmentStateMachine {
  private allowedTransitions: Record<HrEmployeesAssignmentState, HrEmployeesAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesAssignmentState, to: HrEmployeesAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesAssignmentState, to: HrEmployeesAssignmentState): HrEmployeesAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
