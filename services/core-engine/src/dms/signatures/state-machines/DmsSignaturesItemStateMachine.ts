export type DmsSignaturesItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesItemStateMachine {
  private allowedTransitions: Record<DmsSignaturesItemState, DmsSignaturesItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesItemState, to: DmsSignaturesItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesItemState, to: DmsSignaturesItemState): DmsSignaturesItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesItem: " + from + " -> " + to);
    }
    return to;
  }
}
