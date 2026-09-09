export type CrmContactsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsProfileStateMachine {
  private allowedTransitions: Record<CrmContactsProfileState, CrmContactsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsProfileState, to: CrmContactsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsProfileState, to: CrmContactsProfileState): CrmContactsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
