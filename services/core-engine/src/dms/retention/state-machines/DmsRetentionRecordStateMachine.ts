export type DmsRetentionRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionRecordStateMachine {
  private allowedTransitions: Record<DmsRetentionRecordState, DmsRetentionRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionRecordState, to: DmsRetentionRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionRecordState, to: DmsRetentionRecordState): DmsRetentionRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionRecord: " + from + " -> " + to);
    }
    return to;
  }
}
