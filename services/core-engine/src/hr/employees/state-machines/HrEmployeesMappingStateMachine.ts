export type HrEmployeesMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesMappingStateMachine {
  private allowedTransitions: Record<HrEmployeesMappingState, HrEmployeesMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesMappingState, to: HrEmployeesMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesMappingState, to: HrEmployeesMappingState): HrEmployeesMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesMapping: " + from + " -> " + to);
    }
    return to;
  }
}
