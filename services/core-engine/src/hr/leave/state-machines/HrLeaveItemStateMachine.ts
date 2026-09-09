export type HrLeaveItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveItemStateMachine {
  private allowedTransitions: Record<HrLeaveItemState, HrLeaveItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveItemState, to: HrLeaveItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveItemState, to: HrLeaveItemState): HrLeaveItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveItem: " + from + " -> " + to);
    }
    return to;
  }
}
