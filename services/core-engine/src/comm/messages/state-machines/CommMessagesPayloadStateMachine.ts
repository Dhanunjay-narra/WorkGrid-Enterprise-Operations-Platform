export type CommMessagesPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesPayloadStateMachine {
  private allowedTransitions: Record<CommMessagesPayloadState, CommMessagesPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesPayloadState, to: CommMessagesPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesPayloadState, to: CommMessagesPayloadState): CommMessagesPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesPayload: " + from + " -> " + to);
    }
    return to;
  }
}
