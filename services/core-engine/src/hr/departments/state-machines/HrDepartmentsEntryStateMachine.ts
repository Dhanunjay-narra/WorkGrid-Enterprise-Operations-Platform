export type HrDepartmentsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsEntryStateMachine {
  private allowedTransitions: Record<HrDepartmentsEntryState, HrDepartmentsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsEntryState, to: HrDepartmentsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsEntryState, to: HrDepartmentsEntryState): HrDepartmentsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
