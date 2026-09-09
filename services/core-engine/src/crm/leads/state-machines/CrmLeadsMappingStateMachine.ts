export type CrmLeadsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsMappingStateMachine {
  private allowedTransitions: Record<CrmLeadsMappingState, CrmLeadsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsMappingState, to: CrmLeadsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsMappingState, to: CrmLeadsMappingState): CrmLeadsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
