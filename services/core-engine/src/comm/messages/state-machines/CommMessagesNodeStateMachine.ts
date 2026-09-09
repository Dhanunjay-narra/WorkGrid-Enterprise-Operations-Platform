export type CommMessagesNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesNodeStateMachine {
  private allowedTransitions: Record<CommMessagesNodeState, CommMessagesNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesNodeState, to: CommMessagesNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesNodeState, to: CommMessagesNodeState): CommMessagesNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesNode: " + from + " -> " + to);
    }
    return to;
  }
}
