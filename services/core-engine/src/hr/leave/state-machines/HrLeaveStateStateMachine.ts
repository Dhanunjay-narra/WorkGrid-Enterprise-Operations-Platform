export type HrLeaveStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveStateStateMachine {
  private allowedTransitions: Record<HrLeaveStateState, HrLeaveStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveStateState, to: HrLeaveStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveStateState, to: HrLeaveStateState): HrLeaveStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveState: " + from + " -> " + to);
    }
    return to;
  }
}
