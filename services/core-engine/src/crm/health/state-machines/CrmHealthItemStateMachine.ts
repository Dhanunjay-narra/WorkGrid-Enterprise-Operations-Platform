export type CrmHealthItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthItemStateMachine {
  private allowedTransitions: Record<CrmHealthItemState, CrmHealthItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthItemState, to: CrmHealthItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthItemState, to: CrmHealthItemState): CrmHealthItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthItem: " + from + " -> " + to);
    }
    return to;
  }
}
