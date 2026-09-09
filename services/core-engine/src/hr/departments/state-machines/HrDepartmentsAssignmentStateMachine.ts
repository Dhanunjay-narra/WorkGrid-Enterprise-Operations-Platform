export type HrDepartmentsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsAssignmentStateMachine {
  private allowedTransitions: Record<HrDepartmentsAssignmentState, HrDepartmentsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsAssignmentState, to: HrDepartmentsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsAssignmentState, to: HrDepartmentsAssignmentState): HrDepartmentsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
