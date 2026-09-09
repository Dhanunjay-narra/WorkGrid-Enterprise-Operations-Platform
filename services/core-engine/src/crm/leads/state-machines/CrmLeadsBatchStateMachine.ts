export type CrmLeadsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsBatchStateMachine {
  private allowedTransitions: Record<CrmLeadsBatchState, CrmLeadsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsBatchState, to: CrmLeadsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsBatchState, to: CrmLeadsBatchState): CrmLeadsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
