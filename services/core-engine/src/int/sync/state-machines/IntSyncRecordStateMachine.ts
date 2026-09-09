export type IntSyncRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncRecordStateMachine {
  private allowedTransitions: Record<IntSyncRecordState, IntSyncRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncRecordState, to: IntSyncRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncRecordState, to: IntSyncRecordState): IntSyncRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncRecord: " + from + " -> " + to);
    }
    return to;
  }
}
