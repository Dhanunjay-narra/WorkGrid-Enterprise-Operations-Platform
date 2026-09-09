export type HrTimesheetState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrTimesheetStateMachine {
  private validTransitions: Record<HrTimesheetState, HrTimesheetState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrTimesheetState, next: HrTimesheetState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrTimesheetState, next: HrTimesheetState): HrTimesheetState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrTimesheet: from " + current + " to " + next);
    }
    return next;
  }
}
