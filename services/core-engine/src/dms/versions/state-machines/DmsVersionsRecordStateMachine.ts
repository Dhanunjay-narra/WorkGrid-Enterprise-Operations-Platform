export type DmsVersionsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsRecordStateMachine {
  private allowedTransitions: Record<DmsVersionsRecordState, DmsVersionsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsRecordState, to: DmsVersionsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsRecordState, to: DmsVersionsRecordState): DmsVersionsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
