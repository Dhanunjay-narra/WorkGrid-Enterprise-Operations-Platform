export type IntOauthNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthNodeStateMachine {
  private allowedTransitions: Record<IntOauthNodeState, IntOauthNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthNodeState, to: IntOauthNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthNodeState, to: IntOauthNodeState): IntOauthNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthNode: " + from + " -> " + to);
    }
    return to;
  }
}
