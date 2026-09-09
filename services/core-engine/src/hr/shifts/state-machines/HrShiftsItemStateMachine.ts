export type HrShiftsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsItemStateMachine {
  private allowedTransitions: Record<HrShiftsItemState, HrShiftsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsItemState, to: HrShiftsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsItemState, to: HrShiftsItemState): HrShiftsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsItem: " + from + " -> " + to);
    }
    return to;
  }
}
