export type CrmContactsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsSessionStateMachine {
  private allowedTransitions: Record<CrmContactsSessionState, CrmContactsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsSessionState, to: CrmContactsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsSessionState, to: CrmContactsSessionState): CrmContactsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsSession: " + from + " -> " + to);
    }
    return to;
  }
}
