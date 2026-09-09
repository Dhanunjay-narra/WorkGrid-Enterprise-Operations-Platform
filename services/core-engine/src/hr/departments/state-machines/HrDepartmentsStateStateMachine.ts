export type HrDepartmentsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsStateStateMachine {
  private allowedTransitions: Record<HrDepartmentsStateState, HrDepartmentsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsStateState, to: HrDepartmentsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsStateState, to: HrDepartmentsStateState): HrDepartmentsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsState: " + from + " -> " + to);
    }
    return to;
  }
}
