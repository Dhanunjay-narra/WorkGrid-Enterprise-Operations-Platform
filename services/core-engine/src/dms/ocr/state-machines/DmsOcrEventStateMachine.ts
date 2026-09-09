export type DmsOcrEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrEventStateMachine {
  private allowedTransitions: Record<DmsOcrEventState, DmsOcrEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrEventState, to: DmsOcrEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrEventState, to: DmsOcrEventState): DmsOcrEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrEvent: " + from + " -> " + to);
    }
    return to;
  }
}
