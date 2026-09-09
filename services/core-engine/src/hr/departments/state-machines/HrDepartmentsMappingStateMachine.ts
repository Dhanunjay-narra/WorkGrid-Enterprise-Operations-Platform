export type HrDepartmentsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsMappingStateMachine {
  private allowedTransitions: Record<HrDepartmentsMappingState, HrDepartmentsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsMappingState, to: HrDepartmentsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsMappingState, to: HrDepartmentsMappingState): HrDepartmentsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
