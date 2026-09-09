export type CommMessagesEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesEventStateMachine {
  private allowedTransitions: Record<CommMessagesEventState, CommMessagesEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesEventState, to: CommMessagesEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesEventState, to: CommMessagesEventState): CommMessagesEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesEvent: " + from + " -> " + to);
    }
    return to;
  }
}
