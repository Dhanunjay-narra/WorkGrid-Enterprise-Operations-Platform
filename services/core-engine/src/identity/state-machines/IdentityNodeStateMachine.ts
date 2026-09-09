export type IdentityNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityNodeStateMachine {
  private allowedTransitions: Record<IdentityNodeState, IdentityNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityNodeState, to: IdentityNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityNodeState, to: IdentityNodeState): IdentityNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityNode: " + from + " -> " + to);
    }
    return to;
  }
}
