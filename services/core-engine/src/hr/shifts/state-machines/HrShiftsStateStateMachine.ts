export type HrShiftsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsStateStateMachine {
  private allowedTransitions: Record<HrShiftsStateState, HrShiftsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsStateState, to: HrShiftsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsStateState, to: HrShiftsStateState): HrShiftsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsState: " + from + " -> " + to);
    }
    return to;
  }
}
