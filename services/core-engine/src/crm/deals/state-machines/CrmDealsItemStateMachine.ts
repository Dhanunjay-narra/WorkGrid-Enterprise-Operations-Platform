export type CrmDealsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsItemStateMachine {
  private allowedTransitions: Record<CrmDealsItemState, CrmDealsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsItemState, to: CrmDealsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsItemState, to: CrmDealsItemState): CrmDealsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsItem: " + from + " -> " + to);
    }
    return to;
  }
}
