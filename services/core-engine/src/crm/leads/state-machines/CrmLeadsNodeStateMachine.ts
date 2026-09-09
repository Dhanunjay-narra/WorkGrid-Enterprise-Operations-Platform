export type CrmLeadsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsNodeStateMachine {
  private allowedTransitions: Record<CrmLeadsNodeState, CrmLeadsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsNodeState, to: CrmLeadsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsNodeState, to: CrmLeadsNodeState): CrmLeadsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsNode: " + from + " -> " + to);
    }
    return to;
  }
}
