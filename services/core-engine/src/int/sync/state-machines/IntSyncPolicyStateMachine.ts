export type IntSyncPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncPolicyStateMachine {
  private allowedTransitions: Record<IntSyncPolicyState, IntSyncPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncPolicyState, to: IntSyncPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncPolicyState, to: IntSyncPolicyState): IntSyncPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
