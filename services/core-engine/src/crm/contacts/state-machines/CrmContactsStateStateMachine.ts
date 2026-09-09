export type CrmContactsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsStateStateMachine {
  private allowedTransitions: Record<CrmContactsStateState, CrmContactsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsStateState, to: CrmContactsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsStateState, to: CrmContactsStateState): CrmContactsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsState: " + from + " -> " + to);
    }
    return to;
  }
}
