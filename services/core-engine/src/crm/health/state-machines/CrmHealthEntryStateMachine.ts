export type CrmHealthEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthEntryStateMachine {
  private allowedTransitions: Record<CrmHealthEntryState, CrmHealthEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthEntryState, to: CrmHealthEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthEntryState, to: CrmHealthEntryState): CrmHealthEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthEntry: " + from + " -> " + to);
    }
    return to;
  }
}
