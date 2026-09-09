export type DmsChunksRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksRecordStateMachine {
  private allowedTransitions: Record<DmsChunksRecordState, DmsChunksRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksRecordState, to: DmsChunksRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksRecordState, to: DmsChunksRecordState): DmsChunksRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksRecord: " + from + " -> " + to);
    }
    return to;
  }
}
