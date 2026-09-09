export type DmsOcrRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrRecordStateMachine {
  private allowedTransitions: Record<DmsOcrRecordState, DmsOcrRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrRecordState, to: DmsOcrRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrRecordState, to: DmsOcrRecordState): DmsOcrRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrRecord: " + from + " -> " + to);
    }
    return to;
  }
}
