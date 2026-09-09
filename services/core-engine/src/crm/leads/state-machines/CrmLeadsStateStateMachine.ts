export type CrmLeadsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsStateStateMachine {
  private allowedTransitions: Record<CrmLeadsStateState, CrmLeadsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsStateState, to: CrmLeadsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsStateState, to: CrmLeadsStateState): CrmLeadsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsState: " + from + " -> " + to);
    }
    return to;
  }
}
