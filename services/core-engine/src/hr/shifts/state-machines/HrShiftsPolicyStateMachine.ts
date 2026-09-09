export type HrShiftsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsPolicyStateMachine {
  private allowedTransitions: Record<HrShiftsPolicyState, HrShiftsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsPolicyState, to: HrShiftsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsPolicyState, to: HrShiftsPolicyState): HrShiftsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
