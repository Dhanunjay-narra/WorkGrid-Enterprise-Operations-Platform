export type IntSlackPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackPolicyStateMachine {
  private allowedTransitions: Record<IntSlackPolicyState, IntSlackPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackPolicyState, to: IntSlackPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackPolicyState, to: IntSlackPolicyState): IntSlackPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
