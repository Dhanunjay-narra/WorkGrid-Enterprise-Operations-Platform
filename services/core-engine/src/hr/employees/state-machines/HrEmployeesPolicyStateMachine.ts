export type HrEmployeesPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesPolicyStateMachine {
  private allowedTransitions: Record<HrEmployeesPolicyState, HrEmployeesPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesPolicyState, to: HrEmployeesPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesPolicyState, to: HrEmployeesPolicyState): HrEmployeesPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
