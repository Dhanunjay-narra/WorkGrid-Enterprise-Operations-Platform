export type HrShiftsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsEventStateMachine {
  private allowedTransitions: Record<HrShiftsEventState, HrShiftsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsEventState, to: HrShiftsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsEventState, to: HrShiftsEventState): HrShiftsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
