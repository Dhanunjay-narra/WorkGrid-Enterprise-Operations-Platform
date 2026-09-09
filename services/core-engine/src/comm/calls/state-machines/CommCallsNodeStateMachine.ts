export type CommCallsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsNodeStateMachine {
  private allowedTransitions: Record<CommCallsNodeState, CommCallsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsNodeState, to: CommCallsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsNodeState, to: CommCallsNodeState): CommCallsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsNode: " + from + " -> " + to);
    }
    return to;
  }
}
