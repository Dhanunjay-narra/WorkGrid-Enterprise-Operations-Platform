export type HrEmployeesEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesEntryStateMachine {
  private allowedTransitions: Record<HrEmployeesEntryState, HrEmployeesEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesEntryState, to: HrEmployeesEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesEntryState, to: HrEmployeesEntryState): HrEmployeesEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesEntry: " + from + " -> " + to);
    }
    return to;
  }
}
