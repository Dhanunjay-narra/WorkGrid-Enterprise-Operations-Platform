export type DmsOcrItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrItemStateMachine {
  private allowedTransitions: Record<DmsOcrItemState, DmsOcrItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrItemState, to: DmsOcrItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrItemState, to: DmsOcrItemState): DmsOcrItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrItem: " + from + " -> " + to);
    }
    return to;
  }
}
