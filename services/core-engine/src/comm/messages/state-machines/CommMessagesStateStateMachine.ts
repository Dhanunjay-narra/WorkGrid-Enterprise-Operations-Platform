export type CommMessagesStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesStateStateMachine {
  private allowedTransitions: Record<CommMessagesStateState, CommMessagesStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesStateState, to: CommMessagesStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesStateState, to: CommMessagesStateState): CommMessagesStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesState: " + from + " -> " + to);
    }
    return to;
  }
}
