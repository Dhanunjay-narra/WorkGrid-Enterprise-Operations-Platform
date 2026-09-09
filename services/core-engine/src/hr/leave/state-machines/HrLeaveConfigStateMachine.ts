export type HrLeaveConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveConfigStateMachine {
  private allowedTransitions: Record<HrLeaveConfigState, HrLeaveConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveConfigState, to: HrLeaveConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveConfigState, to: HrLeaveConfigState): HrLeaveConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveConfig: " + from + " -> " + to);
    }
    return to;
  }
}
