export type CrmContactsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsConfigStateMachine {
  private allowedTransitions: Record<CrmContactsConfigState, CrmContactsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsConfigState, to: CrmContactsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsConfigState, to: CrmContactsConfigState): CrmContactsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
