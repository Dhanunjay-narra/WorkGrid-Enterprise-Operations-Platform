export type HrLeaveEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveEventStateMachine {
  private allowedTransitions: Record<HrLeaveEventState, HrLeaveEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveEventState, to: HrLeaveEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveEventState, to: HrLeaveEventState): HrLeaveEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveEvent: " + from + " -> " + to);
    }
    return to;
  }
}
