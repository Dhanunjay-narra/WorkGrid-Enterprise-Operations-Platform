export type HrDepartmentsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsPolicyStateMachine {
  private allowedTransitions: Record<HrDepartmentsPolicyState, HrDepartmentsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsPolicyState, to: HrDepartmentsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsPolicyState, to: HrDepartmentsPolicyState): HrDepartmentsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
