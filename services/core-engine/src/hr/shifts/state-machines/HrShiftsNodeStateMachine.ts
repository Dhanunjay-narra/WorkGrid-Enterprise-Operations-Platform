export type HrShiftsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsNodeStateMachine {
  private allowedTransitions: Record<HrShiftsNodeState, HrShiftsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsNodeState, to: HrShiftsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsNodeState, to: HrShiftsNodeState): HrShiftsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsNode: " + from + " -> " + to);
    }
    return to;
  }
}
