export type DmsVersionsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsItemStateMachine {
  private allowedTransitions: Record<DmsVersionsItemState, DmsVersionsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsItemState, to: DmsVersionsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsItemState, to: DmsVersionsItemState): DmsVersionsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsItem: " + from + " -> " + to);
    }
    return to;
  }
}
