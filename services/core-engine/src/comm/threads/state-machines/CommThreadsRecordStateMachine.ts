export type CommThreadsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsRecordStateMachine {
  private allowedTransitions: Record<CommThreadsRecordState, CommThreadsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsRecordState, to: CommThreadsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsRecordState, to: CommThreadsRecordState): CommThreadsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
