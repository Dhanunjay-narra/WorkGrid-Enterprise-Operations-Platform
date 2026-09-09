export type CrmDealsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsEntryStateMachine {
  private allowedTransitions: Record<CrmDealsEntryState, CrmDealsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsEntryState, to: CrmDealsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsEntryState, to: CrmDealsEntryState): CrmDealsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
