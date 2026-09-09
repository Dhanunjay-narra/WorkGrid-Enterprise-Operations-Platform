export type DmsOcrTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrTaskStateMachine {
  private allowedTransitions: Record<DmsOcrTaskState, DmsOcrTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrTaskState, to: DmsOcrTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrTaskState, to: DmsOcrTaskState): DmsOcrTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrTask: " + from + " -> " + to);
    }
    return to;
  }
}
