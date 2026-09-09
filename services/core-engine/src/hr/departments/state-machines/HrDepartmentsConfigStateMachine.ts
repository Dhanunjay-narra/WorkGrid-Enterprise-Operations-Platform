export type HrDepartmentsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsConfigStateMachine {
  private allowedTransitions: Record<HrDepartmentsConfigState, HrDepartmentsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsConfigState, to: HrDepartmentsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsConfigState, to: HrDepartmentsConfigState): HrDepartmentsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
