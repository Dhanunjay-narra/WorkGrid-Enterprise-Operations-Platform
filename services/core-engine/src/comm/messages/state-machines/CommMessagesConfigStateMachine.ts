export type CommMessagesConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesConfigStateMachine {
  private allowedTransitions: Record<CommMessagesConfigState, CommMessagesConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesConfigState, to: CommMessagesConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesConfigState, to: CommMessagesConfigState): CommMessagesConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesConfig: " + from + " -> " + to);
    }
    return to;
  }
}
