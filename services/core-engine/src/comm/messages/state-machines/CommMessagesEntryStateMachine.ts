export type CommMessagesEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesEntryStateMachine {
  private allowedTransitions: Record<CommMessagesEntryState, CommMessagesEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesEntryState, to: CommMessagesEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesEntryState, to: CommMessagesEntryState): CommMessagesEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesEntry: " + from + " -> " + to);
    }
    return to;
  }
}
