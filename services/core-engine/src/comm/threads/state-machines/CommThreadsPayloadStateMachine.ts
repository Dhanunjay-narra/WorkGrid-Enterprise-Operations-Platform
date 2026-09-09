export type CommThreadsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsPayloadStateMachine {
  private allowedTransitions: Record<CommThreadsPayloadState, CommThreadsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsPayloadState, to: CommThreadsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsPayloadState, to: CommThreadsPayloadState): CommThreadsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
