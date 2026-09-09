export type HrShiftsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsThresholdStateMachine {
  private allowedTransitions: Record<HrShiftsThresholdState, HrShiftsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsThresholdState, to: HrShiftsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsThresholdState, to: HrShiftsThresholdState): HrShiftsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
