export type HrDepartmentsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsItemStateMachine {
  private allowedTransitions: Record<HrDepartmentsItemState, HrDepartmentsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsItemState, to: HrDepartmentsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsItemState, to: HrDepartmentsItemState): HrDepartmentsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsItem: " + from + " -> " + to);
    }
    return to;
  }
}
