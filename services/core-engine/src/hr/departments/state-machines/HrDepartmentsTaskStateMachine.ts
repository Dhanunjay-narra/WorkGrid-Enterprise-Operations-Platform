export type HrDepartmentsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsTaskStateMachine {
  private allowedTransitions: Record<HrDepartmentsTaskState, HrDepartmentsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsTaskState, to: HrDepartmentsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsTaskState, to: HrDepartmentsTaskState): HrDepartmentsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsTask: " + from + " -> " + to);
    }
    return to;
  }
}
