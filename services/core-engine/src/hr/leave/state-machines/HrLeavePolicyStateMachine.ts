export type HrLeavePolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeavePolicyStateMachine {
  private allowedTransitions: Record<HrLeavePolicyState, HrLeavePolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeavePolicyState, to: HrLeavePolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeavePolicyState, to: HrLeavePolicyState): HrLeavePolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeavePolicy: " + from + " -> " + to);
    }
    return to;
  }
}
