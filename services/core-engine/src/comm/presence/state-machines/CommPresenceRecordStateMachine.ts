export type CommPresenceRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceRecordStateMachine {
  private allowedTransitions: Record<CommPresenceRecordState, CommPresenceRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceRecordState, to: CommPresenceRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceRecordState, to: CommPresenceRecordState): CommPresenceRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceRecord: " + from + " -> " + to);
    }
    return to;
  }
}
