export type HrLeaveNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveNodeStateMachine {
  private allowedTransitions: Record<HrLeaveNodeState, HrLeaveNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveNodeState, to: HrLeaveNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveNodeState, to: HrLeaveNodeState): HrLeaveNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveNode: " + from + " -> " + to);
    }
    return to;
  }
}
