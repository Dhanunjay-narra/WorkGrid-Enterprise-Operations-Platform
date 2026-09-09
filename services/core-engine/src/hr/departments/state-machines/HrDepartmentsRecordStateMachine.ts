export type HrDepartmentsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsRecordStateMachine {
  private allowedTransitions: Record<HrDepartmentsRecordState, HrDepartmentsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsRecordState, to: HrDepartmentsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsRecordState, to: HrDepartmentsRecordState): HrDepartmentsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
