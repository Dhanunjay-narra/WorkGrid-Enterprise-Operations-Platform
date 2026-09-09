export type HrEmployeesRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesRecordStateMachine {
  private allowedTransitions: Record<HrEmployeesRecordState, HrEmployeesRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesRecordState, to: HrEmployeesRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesRecordState, to: HrEmployeesRecordState): HrEmployeesRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesRecord: " + from + " -> " + to);
    }
    return to;
  }
}
