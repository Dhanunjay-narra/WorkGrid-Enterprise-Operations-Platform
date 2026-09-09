export type CrmLeadsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsEntryStateMachine {
  private allowedTransitions: Record<CrmLeadsEntryState, CrmLeadsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsEntryState, to: CrmLeadsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsEntryState, to: CrmLeadsEntryState): CrmLeadsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
