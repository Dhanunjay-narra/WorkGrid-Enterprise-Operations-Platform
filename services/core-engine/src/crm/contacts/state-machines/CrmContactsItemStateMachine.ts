export type CrmContactsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsItemStateMachine {
  private allowedTransitions: Record<CrmContactsItemState, CrmContactsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsItemState, to: CrmContactsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsItemState, to: CrmContactsItemState): CrmContactsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsItem: " + from + " -> " + to);
    }
    return to;
  }
}
