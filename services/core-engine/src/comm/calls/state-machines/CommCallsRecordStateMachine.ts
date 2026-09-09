export type CommCallsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsRecordStateMachine {
  private allowedTransitions: Record<CommCallsRecordState, CommCallsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsRecordState, to: CommCallsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsRecordState, to: CommCallsRecordState): CommCallsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
