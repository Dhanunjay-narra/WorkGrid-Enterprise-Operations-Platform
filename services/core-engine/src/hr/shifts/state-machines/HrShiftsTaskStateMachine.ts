export type HrShiftsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsTaskStateMachine {
  private allowedTransitions: Record<HrShiftsTaskState, HrShiftsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsTaskState, to: HrShiftsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsTaskState, to: HrShiftsTaskState): HrShiftsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsTask: " + from + " -> " + to);
    }
    return to;
  }
}
