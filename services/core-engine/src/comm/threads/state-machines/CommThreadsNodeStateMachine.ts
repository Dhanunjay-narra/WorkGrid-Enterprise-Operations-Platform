export type CommThreadsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsNodeStateMachine {
  private allowedTransitions: Record<CommThreadsNodeState, CommThreadsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsNodeState, to: CommThreadsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsNodeState, to: CommThreadsNodeState): CommThreadsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsNode: " + from + " -> " + to);
    }
    return to;
  }
}
