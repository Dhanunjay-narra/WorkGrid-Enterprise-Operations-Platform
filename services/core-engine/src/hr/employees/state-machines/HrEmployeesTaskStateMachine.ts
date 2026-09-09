export type HrEmployeesTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesTaskStateMachine {
  private allowedTransitions: Record<HrEmployeesTaskState, HrEmployeesTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesTaskState, to: HrEmployeesTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesTaskState, to: HrEmployeesTaskState): HrEmployeesTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesTask: " + from + " -> " + to);
    }
    return to;
  }
}
