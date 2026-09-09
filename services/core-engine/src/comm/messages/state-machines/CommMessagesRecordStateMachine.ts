export type CommMessagesRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesRecordStateMachine {
  private allowedTransitions: Record<CommMessagesRecordState, CommMessagesRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesRecordState, to: CommMessagesRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesRecordState, to: CommMessagesRecordState): CommMessagesRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesRecord: " + from + " -> " + to);
    }
    return to;
  }
}
