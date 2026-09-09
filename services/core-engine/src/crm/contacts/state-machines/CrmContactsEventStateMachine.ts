export type CrmContactsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsEventStateMachine {
  private allowedTransitions: Record<CrmContactsEventState, CrmContactsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsEventState, to: CrmContactsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsEventState, to: CrmContactsEventState): CrmContactsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
