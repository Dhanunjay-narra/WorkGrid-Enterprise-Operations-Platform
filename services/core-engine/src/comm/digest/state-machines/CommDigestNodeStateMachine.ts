export type CommDigestNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestNodeStateMachine {
  private allowedTransitions: Record<CommDigestNodeState, CommDigestNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestNodeState, to: CommDigestNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestNodeState, to: CommDigestNodeState): CommDigestNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestNode: " + from + " -> " + to);
    }
    return to;
  }
}
