export type CrmLeadsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsItemStateMachine {
  private allowedTransitions: Record<CrmLeadsItemState, CrmLeadsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsItemState, to: CrmLeadsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsItemState, to: CrmLeadsItemState): CrmLeadsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsItem: " + from + " -> " + to);
    }
    return to;
  }
}
