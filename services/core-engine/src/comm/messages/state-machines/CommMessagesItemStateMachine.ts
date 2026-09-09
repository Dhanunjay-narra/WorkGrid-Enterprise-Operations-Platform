export type CommMessagesItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesItemStateMachine {
  private allowedTransitions: Record<CommMessagesItemState, CommMessagesItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesItemState, to: CommMessagesItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesItemState, to: CommMessagesItemState): CommMessagesItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesItem: " + from + " -> " + to);
    }
    return to;
  }
}
