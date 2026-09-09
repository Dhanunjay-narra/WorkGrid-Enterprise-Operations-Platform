export type CrmAccountsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsItemStateMachine {
  private allowedTransitions: Record<CrmAccountsItemState, CrmAccountsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsItemState, to: CrmAccountsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsItemState, to: CrmAccountsItemState): CrmAccountsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsItem: " + from + " -> " + to);
    }
    return to;
  }
}
